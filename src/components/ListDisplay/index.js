import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ListDetail from "./listDetail";
import PageTemplate from './pageTemplate';

import { PDFExport } from "@progress/kendo-react-pdf";

const mapState = (state, ownProps) => {
  const checklistId = ownProps.match.params.id;

  let checklists = {};

  if (checklistId && state.checklists.length > 0) {
    checklists = state.checklists.filter(
      checklists => checklists.id === checklistId
    )[0];
  }

  return { // error!!!
    checklists
  };
};

class ListDisplay extends Component {
  
  exportPDF = () => {
    this.report.save();
  };

  render() {

    // const { checklists } = this.props;

    return (
      <React.Fragment>
        <button onClick={this.exportPDF} className="button-pdf" >PDF download</button>
        <Link to={`/editChecklist/${this.props.checklists.id}`} className="btn btn-success btn-lg">Edit</Link>
        <PDFExport paperSize={'A4'}
            fileName="_____.pdf"
            pageTemplate={PageTemplate}
            margin={0.8}
            scale={0.8}
            keepTogether="p"
            title=""
            subject=""
            keywords=""
            ref={(r) => this.report = r}>
                <div 
                    // style={{
                    //     height: 792,
                    //     width: 1020,
                    //     padding: 'none',
                    //     backgroundColor: 'white',
                    //     boxShadow: '5px 5px 5px black',
                    //     margin: 'auto',
                    //     overflowX: 'hidden',
                    //     overflowY: 'hidden'}} 
                        >
                <div className="center_container">
                  <div className="inside_wrapper">
                    <h3 className="container-title">Checklist for Drydockings</h3>
                    <ListDetail 
                    checklists={this.props.checklists} 
                    />
                  </div>
                </div>
              </div>
          </PDFExport>
      </React.Fragment>
    );
  }
}


export default connect(mapState)(ListDisplay);
