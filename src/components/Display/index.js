import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckListDetail from './listMap';
 
 class Display extends Component {
  render() {
    const { checklists } = this.props;
    return (
      <div className="center_wrapper" >
        <h5 className="center-title">Checklists</h5>
        
        
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
