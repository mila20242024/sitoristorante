//rfc
import React from 'react'
import { Link } from 'react-router-dom'

 function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-end">
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          { <Link className="nav-link active" aria-current="page" to="/">Home</Link> }
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to= "/ourlocations">Our Locations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cocktails">Cocktails</Link>
        </li>
        {/* <li className="nav-item">
          <link className="nav-link active" aria-current="page" href="#">Contact Us</link>
        </li>
        <li className="nav-item dropdown">
          
          <ul className="dropdown-menu">
            <li><link className="dropdown-item" href="#">Action</link></li>
            <li><link className="dropdown-item" href="#">Another action</link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><link className="dropdown-item" href="#">Something else here</link></li>
          </ul>
        </li>         */}
        {/* ricordati di inserire il self closure quando usi input /> */}

       
      </ul>
        <button className="btn btn-outline-success" type="submit">Reserve</button>
      
    </div>
  </div>
</nav>
    
    );
}

export default Navbar
