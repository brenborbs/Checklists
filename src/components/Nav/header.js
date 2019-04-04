import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <>
     <ul className="nav justify-content-center bg-dark">
    <li className="nav-item">
      <Link className="nav-link" to="/">Checklists</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/create">Create Checklist</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/">Checklist</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/">Know</Link>
    </li>
  </ul> 
    </>
  );
};

export default header;