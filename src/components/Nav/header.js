import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
            <Link className="btn btn-link" to="/" style={{ color: 'white' , textTransform: 'uppercase' }} ><strong>Checklists</strong></Link>
            <Link className="btn btn-danger" to="/create">New Checklist</Link>
          </div>
        </div>
    </nav>
  //   <>
  //    <nav className="navbar navbar-expand-lg justify-content-center bg-dark">
  //   <li className="nav-item">
  //     <Link className="nav-link" to="/">Checklists</Link>
  //   </li>
  //   <li className="nav-item">
  //   <Link className="ui green button" to="/create">New Checklist</Link>
  //   </li>
  //   {/* <li className="nav-item">
  //   <Link className="nav-link" to="/">Checklist</Link>
  //   </li>
  //   <li className="nav-item">
  //   <Link className="nav-link" to="/">Know</Link>
  //   </li> */}
  // </nav> 
  //   </>
  );
};

export default header;