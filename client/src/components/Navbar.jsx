import React,{useEffect, useState} from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name,setName] = useState(localStorage.getItem('name'));
  const Logout = ()=>{
    navigate('/login');
    localStorage.removeItem('auth-token');
    localStorage.removeItem('name');
    setName(null);
  }
  useEffect(()=>{
    setName(localStorage.getItem('name'));
  },[location.pathname]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          SecNotes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/' ? "active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/about' ? "active":""}`} aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('auth-token') ? <form className="d-flex" role="search">
          <Link className="btn btn-primary mx-1" to={'/login'} role="button">Login</Link>
          <Link className="btn btn-primary mx-1" to={'/signup'} role="button">Signup</Link>
          </form>:(
            <>
            {name!==null && <p className="mx-2 my-auto" style={{"color":"white"}}aria-current="page">{name}</p>}
            <button onClick={Logout} className="btn btn-primary mx-1">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
