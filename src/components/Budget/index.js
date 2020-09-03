import React, { Component } from 'react';
import List from './list';
import { Button } from 'semantic-ui-react';
import { PDFExport } from '@progress/kendo-react-pdf';


 class form2 extends Component {
  
  state = {
    checklist : [
      {
        id: 0,
        title: '1. Pre-Planning',
        desc: ['1.1 Paint Specification received and revised', '1.2 Dock Specification recieved and revised', '1.3 Unit prices recieved and revised', '1.4 Paint Specification according to dock specification requirements', '1.5 Previous docking report recieved and revised', '1.6 Project identification recieved and revised' ]
      },
      {
        id: 1,
        title: '2. Pre-Planning',
        desc: ['2.1 Paint Specification recieved', '2.2 Personal equipment in good working order']
      }
    ]
  }
  
  exportPDF = () => {
    this.report.save();
   }
  
  render() {
    const { checklist } = this.state;
    return (
      <>
      <Button onClick={this.exportPDF} color='red'>PDF Download</Button>
      <PDFExport paperSize={'A4'}
    fileName="_____.pdf"
    // pageTemplate={PageTemplate}
    margin="1.5cm"
    keepTogether="p"
    title=""
    subject=""
    keywords=""
    ref={(r) => this.report = r}>
        <div 
        // style={{
        //     height: 792,
        //     width: 612,
        //     padding: 'none',
        //     backgroundColor: 'white',
        //     boxShadow: '5px 5px 5px black',
        //     margin: 'auto',
        //     overflowX: 'hidden',
        //     overflowY: 'hidden'}} 
            >
      <div className="page_container">
        <div className="title">
        <h3>CheckList for Drydocking</h3>
        </div>
        <List 
        checklist={checklist}
        />
        </div>
        </div>
        </PDFExport>
        </>
    )
  }
}

export default form2;