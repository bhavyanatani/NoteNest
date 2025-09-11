import React from 'react'
import { useContext } from 'react'
import notecontext from '../Context/Notes/notecontext'
const NoteItem = (props) => {
    const {showAlert} = props;
    const { note, updateNote } = props;
    const context = useContext(notecontext);
    const {deleteNote} = context;
    return (
        <div className='col-md-3'>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex align-items-center justify-content-around'>
                        <i className="fa-solid fa-trash" onClick = {()=>{deleteNote(note._id);showAlert("Note Deleted Successfully!","success")}}></i>
                        <i className="fa-solid fa-pen-to-square" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick = {()=>{updateNote(note)}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
