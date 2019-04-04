import React, { Component } from 'react';
import Header from '../../components/Nav/header';

export default class Layout extends Component {
  render() {
    return (
      <>
       <Header />
       <div className="page_wrapper" >
       {this.props.children}
       </div> 
      </>
    )
  }
}
