import { useContext, useEffect, useState,useRef } from 'react'
import notecontext from '../Context/Notes/notecontext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const navigate = useNavigate();
  const context = useContext(notecontext);
  const { notes, getNotes,editNote } = context;
  const { showAlert } = props;
  const [note,setNote] = useState({id:"",editTitle:"",editDescription:"",editTag:""});
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();
    }else{
      navigate('/login');
    }
    //eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const updateNote = (currentnote) => {
    setNote({id:currentnote._id,editTitle:currentnote.title,editDescription:currentnote.description,editTag:currentnote.tag});
    // prepare note for editing here if needed
  }
  const handleClick = (e) =>{
    editNote(note.id,note.editTitle,note.editDescription,note.editTag);
    ref.current.click();
}
const onChange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value});
}
  return (
    <>
      <AddNote showAlert={showAlert} />

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{display:"none"}} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="editTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" value={note.editTitle} id="editTitle" name="editTitle" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="editDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" value={note.editDescription} id="editDescription" name="editDescription" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="editTag" className="form-label">Tag</label>
                    <input type="text" className="form-control" value={note.editTag} id="editTag" name="editTag" onChange={onChange}/>
                </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={ref} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-2"> 
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
    </>
  )
}

export default Notes
