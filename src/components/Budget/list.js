import React, { Component } from 'react';
import DetailList from './listDetail';

class ListCheck extends Component {
  
  render() {
    const checklist = this.props.checklist.map((r, index ) => (
      <DetailList 
      key={r.id} {...r}
      />
    ))
    return (
      <>
        {checklist}
      </>
    )
  }
}

export default ListCheck;
