import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckListDetail from './listMap';
 
 class Display extends Component {
  render() {
    const { checklists } = this.props;
    return (
      <div className="center_wrapper" >
        <h2 className="center-title">All Checklists</h2>
        
        
        <CheckListDetail 
        checklists={checklists}
        />
        
      </div>
    )
  }
}

const mapState = (state) => ({
  checklists : state.checklists
})

export default connect(mapState) (Display);
