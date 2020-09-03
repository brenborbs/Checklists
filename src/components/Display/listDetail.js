import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

class listDetail extends Component {
  render() {
    const { checklists } = this.props;
    return (
      <React.Fragment>
        <Card.Content>
                 
                    <p><strong>1. Pre-Planning</strong></p>
                        <div>1.1 Paint Specification received and revised: <strong><p>{checklists.replyOne}</p></strong>
                      <div>Comments:
                            <div>
                            <strong>{checklists.commentsOne}</strong>
                            </div>
                          </div>
                        </div>
                        <Link to={`/checklists/${checklists.id}`}
                        style={{ marginTop: '5px' }} 
                        className="btn btn-info">View</Link>
                  
        </Card.Content>
      </React.Fragment>
    )
  }
}

export default  listDetail;