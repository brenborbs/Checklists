import React, { Component } from 'react';
// import Menu from './menu';

class Header extends Component {
  render() {
    const { toggleMenu } = this.props;
    return (
      <>
      <div className="nav__header">
        <img src="img/logo.svg" alt="" className="nav__logo" />

          <span className="nav__btn">
            <i className="far fa-hand-point-down" onClick={toggleMenu}></i>
          </span>
      </div>
    </>
    );
  }
}


export default Header;