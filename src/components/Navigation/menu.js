import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    const { showMenu } = this.props;
    return (
      <>
            { showMenu ?
        <ul className="nav__links">
        <li>
         <Link to="/" className="nav__single-link">home</Link>
        </li>
        <li>
         <Link to="/" className="nav__single-link">about</Link>
        </li>
        <li>
         <Link to="/" className="nav__single-link">services</Link>
        </li>
       </ul>
       : 'show__links'
      } 
      
      </>
    );
  }
}

export default Menu;