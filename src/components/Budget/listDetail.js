import React, { Component } from 'react'
import { Form, Radio, TextArea } from 'semantic-ui-react'

 class ListDetail extends Component {
   state = {}

  //  handleChange = (e, { value }) => 
  // this.setState({ value })
  
  render() {
    const {title } = this.props;
    const desc = this.props.desc.map((ar, index )=>(
      <div key={index}  className="item_spec" >
      <Form >
    <p><strong>{ar}</strong></p>
    <Form.Field>
      <Radio
        label='Yes'
        name='radioGroup'
        value='yes'
        // checked={this.state.value === 'yes'}
        // onChange={this.handleChange}
      />
    </Form.Field>
    <Form.Field>
      <Radio
        label='No'
        name='radioGroup'
        value='no'
        // checked={this.state.value === 'no'}
        // onChange={this.handleChange}
      />
    </Form.Field>
    <TextArea 
    placeholder='Comments' 
    style={{ minHeight: 50 }} />
  </Form>
  {/* <Divider/> */}
      </div>
    ))
    return (
      <div>
        <div className="pre_title">
                <p><strong>{title}</strong></p>
            </div> 
            {desc}
          
      </div>
    )
  }
}

export default ListDetail;
