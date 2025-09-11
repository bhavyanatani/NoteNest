import {
    Link,
    useLocation,
    useNavigate
  } from "react-router-dom";
export default function Navbar() {
    let history = useNavigate();
    let location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img 
                            src="https://i.pinimg.com/1200x/bc/df/29/bcdf29edabd1b961a70140cabcc8cfb5.jpg" 
                            alt="Logo" 
                            width="50" 
                            height="32" 
                            className="d-inline-block me-2"
                            style={{objectFit: 'cover', borderRadius: '4px'}}
                        />
                        <span>NoteNest</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="about"? "active": ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    {!localStorage.getItem("token")?
                    <>
                    <Link className="btn btn-primary mx-1"  to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                    </>:
                    <button onClick={()=>{
                        localStorage.removeItem("token");
                        history("/login");
                    }} className="btn btn-primary mx-1" role="button">Logout</button>}
                </div>
            </nav>
        </div>
    )
}
