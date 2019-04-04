import React, { Component } from 'react';
import { Divider ,Grid, Segment, Radio, Container , Button, Header, Item, Form, TextArea } from 'semantic-ui-react';
import { PDFExport } from '@progress/kendo-react-pdf';

 class TestForm2 extends Component {
  
  exportPDF = () => {
    this.report.save();
   }

  render() {
    return (
      <Grid centered columns={2} >
        <Container >
      <Button onClick={this.exportPDF} color='red'>PDF Download</Button>
      </Container>
        <Grid.Column width={10} >
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
          <Segment>
          <Container textAlign='center' >
          <Header as='h3'>CheckList For Drydockings</Header>
          </Container>
      <Header as='h4'block textAlign='center' color='blue' >
        1. Pre-Planning
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>1.1 Paint Specification recieved and revised </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' />
      </Form>
      <Divider/>
      <Item.Header>1.2 Dock Specification recieved and revised </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }}  />
      </Form>
      <Divider/>
      <Item.Header>1.3 Unit prices recieved and revised </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>1.4 Paint Specification according to dock specification requirements </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>1.5 Previous docking report recieved and revised </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>1.6 Project identification recieved and revised </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 2.  */}
  <Header as='h4'block textAlign='center' color='blue' >
        2. Pre-Planning
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>2. Paint Specification recieved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>2.2 Personal equipment in good working order </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>2.3 Checked with colleagues previous experiences and feedback </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.3.1 Feedback obtained from Yard performance </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.3.2 Feedback obtained from Maunufacturer CA performance </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.3.3 Feedback obtained from contractor </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>2.4 Contacted Owner and local agent to arrange formalities </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>2.5 Checked with local agent the need of documentation for gate pass </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>2.6 Requested local number to the agent </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 3. */}
  <Header as='h4'block textAlign='center' color='blue' >
        3. On Site Meetings
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>2.1.1 One to one meeting with attending superintendent </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>2.1.2 Revised paint specification and work scope </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
    
      <Item.Header>2.1.3 Confirmed undocking date </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.1.4 Washing pressure agreed</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.1.5 Well maintained equipment to be used </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.1.6 Hand guns to be used </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>2.1.7 Requirement of extra time and use of cherry pcikers for DFT readings </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>2.1.8 Our recommendations to be strictly followed </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>2.1.8 Yard unit prices and missing documentation requested to SI </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.1.9 Trade pattern Av speed, water temp, ice, fouling , activity level </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.1.10 Same trade pattern after current drydocking </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>

        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      <Divider/>
      <Item.Header>2.2 Kick-off meeting with Yard and manufacturer </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.1 All involved parties attended </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.2 Working program and schedule provided by the Yard </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.3 Joint In-docking evaluation</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.4 Sufficient lights installed on dock bottom </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.5 Washing equipment in good working order </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.6 Pressure for washing as specified </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.7 Yard QC and manufacturer present on inspection </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.8 Extent agreement after Washing </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.9 Hydro-Jetting equipment in good working order </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.10 Washing water of clean condition </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.11 Squares and feathering achieved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.12 Paint equipment to be in good working order </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.13 Paint distribution </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.14 Hand guns used </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.15 WFT gauges provided and tests done </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.16 Adequate spraying technique </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.17 Pot man trained on mixing and thining </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.18 DFT reading done on each coat </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.19 Overcoating intervals followed </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.20 AC thickness achieved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>2.2.21 A/F reapplication after completion </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>

        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 3. */}
  <Header as='h4'block textAlign='center' color='blue' >
        3. High Pressure Washing
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>3.1 In docking evaluation with Yard </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>3.2 Light installed on dock bottom </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
    
      <Item.Header>3.3 Scraping required </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>3.4 Washing pressure as specification</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>3.5 Equipment inspected and approved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>3.6 Washing pattern from top to bottom </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>3.7 Washing inspection approved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>3.8 Protection installed satisfactorily </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>3.9 Re-washing required </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 4. */}
  <Header as='h4'block textAlign='center' color='blue' >
        3. Hydro Jetting
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>4.1 Surface extent agreement done upon washing completion </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>4.1.1 Areas agreed on m2 and agreement signed </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
    
      <Item.Header>4.1.2 Obtained a copy of the agreement </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      <Divider/>
        <Item.Header>4.2 All equipment in good working order</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.2.1 Nozzle and hoses connections in good condition </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.2.2 Operators skilled and well trained </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      <Item.Header>4.2.3 Safe equipment </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      <Divider/>

      <Item.Header>4.4 Hydro-Jetting acceptable cleanliness standard achieved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>4.4.1 Feathering to intact paint system achieved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.2 Formed in squares </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.3 Profile achieved </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.4 Dirt free </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.5 Chloride tests acceptable </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.6 Condensation free </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.7 Microclimate readings acceptable </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>4.4.8 Flash rust acceptable </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>

        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 5 */}
  <Header as='h4'block textAlign='center' color='blue' >
        5. Painting Equipment
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>5.1 Spray pumps in good working order </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>5.1.1 Suction pump mesh replaced daily </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
    
      <Item.Header>5.1.2 Clean air supplied </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.3 Working pressure gauge </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.4 Handguns used </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.5 Handgun filter replaced daily </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.6 Adequate nozzle tips used </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.7 Mechanical paddles as mixing method </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.8 WFT gauages available and clean </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.1.9 Safe equipment </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      <Divider/>
        <Item.Header>5.2 Skilled personnel</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.1 Sprayers good painting technique </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.2 WFT measurements done </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      <Item.Header>5.2.3 Pot man mixing and thinning trained </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.4 Instructions followed </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.5 Good distance from the surface to coat </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.6 Good angle </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.7 Yard QC available </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.2.8 Paint Foreman available</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      <Divider/>

      <Item.Header>5.3 Paint consumption within reasonable quantities</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>5.3.1 Paint distributed to each pump accordingly the area of application </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.2 Paint reapplication </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.5.3 Anticorrosive DFT reached as per specification </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.4 Overcoating intervals followed </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.4 Surface dust free between coats </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.5 Microclimate condition acceptable </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.6 Rain during painting </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.7 Wind speed within the acceptable limits during paint application </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.8 Paint consumption controlled </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>5.3.9 All used drums well consumed </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>

        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 6 */}
  <Header as='h4'block textAlign='center' color='blue' >
        6. Painting Manufacturer
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>6.1 Paint quantities delivered as specification </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      
      <Item.Header>6.1.1 Delivery checked by JMC and manufacturer together </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
    
      <Item.Header>6.1.2 Obtained a copy of delivery tickets </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.1.3 Paints kept safely stored </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.1.4 Batch number recorded </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.1.5 Extra paint ordered </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.1.6 Paint distributed adequately </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.1.7 Mixing and thinning done correctly </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.1.8 Unused paints returned and recorded </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      <Divider/>
        <Item.Header>6.2 Manufacturer CA available</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.1 Present during kick-off meeting </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.2 Present during daily mettings </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
      <Item.Header>6.2.3 Present during in-docking evaluation</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.4 Present during blasting inspections </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.5 Chloride test done </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.6 Profile test done </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.7 Dust test done </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.8 Present during paint application</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>

      <Item.Header>6.2.9 Revised the equipment</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        
      <Item.Header>6.2.10 Microclimate readings taken </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.11 WFT readings taken </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.12 Instructions givent the sprayers and pot man </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.13 DFT reading done on each coat </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.14 Distributed the paint accordingly </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.15 Corrected bad spraying techniques </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.16 Controlled paint quantities </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>6.2.17 available throughout the project </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Divider/>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
  {/* 8 */}
      <Header as='h4'block textAlign='center' color='blue' >
        7. Reporting and Inspections
      </Header>
      <Item.Group>
      <Item>
      <Item.Content verticalAlign='middle'>
        <Item.Header>7.1 Daily report sent at the end of each working day</Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>7.2 Water ballast tanks inspected </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>7.3 Cargo tanks inspected </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>7.4 General exteriors inspected </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>7.5 Paint locker inspected </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form>
      <Divider/>
      <Item.Header>7.6 Audit of the on-board paint maintenance processes </Item.Header>
        <Item.Description> 
          <p><strong>Yes</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Description> 
          <p><strong>No</strong> </p><Radio toggle /> 
        </Item.Description>
        <Item.Header>Comments </Item.Header>
        <Form>
      <TextArea placeholder='Tell us more' style={{ minHeight: 100 }} />
      </Form> 
      </Item.Content>
    </Item>
  </Item.Group>
          </Segment>
        </div>
</PDFExport>
        </Grid.Column>
      </Grid>
    )
  }
}

export default TestForm2;