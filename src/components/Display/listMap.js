import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import ListDetail from './listDetail';

 class listMap extends Component {
  render() {
    const { checklists } = this.props;
    return (
      <Card fluid>
        { checklists.map(( checklists ) => (
          <ListDetail 
           key={checklists.id}
           checklists={checklists}
          />
        ))}
      </Card>
    )
  }
}

export default listMap;
