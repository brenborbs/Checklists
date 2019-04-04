import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { combineValidators, composeValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import cuid from 'cuid';
import { createChecklist } from '../../actions/checkListActions';

// import SelectInput from './select';
import TextArea from './textArea';

const mapState = (state, ownProps) => {
  const checklistId = ownProps.match.params.id;

  let checklists = {};

  if (checklistId && state.checklists.length > 0) {
    checklists = state.checklists.filter(
      checklists => checklists.id === checklistId
    )[0];
  }

  return { // error!!!
    initialValues: checklists
  };
};

const actions = {
  createChecklist
}

const validate = combineValidators({
  commentsOne: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(10)({message: 'Comment body must be at least more than 10 characters'})
  )(),
  commentsTwo: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(10)({message: 'Comment body must be at least more than 10 characters'})
  )(),
  commentsThree: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(10)({message: 'Comment body must be at least more than 10 characters'})
  )(),
  commentsFour: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(10)({message: 'Comment body must be at least more than 10 characters'})
  )(),
})

 class CheckListinput extends Component {

  onFormSubmit = values => {

    if (this.props.initialValues.id) {
      // this.props.updateChecklist(values);
      this.props.history.goBack();
    } else {
      const newChecklist = {
        ...values,
        id: cuid(),
      }
      this.props.createChecklist(newChecklist)
      console.log(newChecklist)
      this.props.history.push('/')
    }
  }


  render() {

    const { invalid, submitting, pristine } = this.props;

    return (
      <div className="center_wrapper">
          <div className="inside_wrapper" >
              <h5 className="center-title">Checklist for Drydockings</h5>
                <div className="form_wrapper" >
                    <p><strong>1. Pre-Planning</strong></p>
                    <div className="inside_form" >
                        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} >
                        
                        <label>1.1 Paint Specification received and revised</label>
                          <Field 
                          name="replyOne"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsOne"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                          <label>1.2 Dock Specification received and revised</label>
                          <Field 
                          name="replyTwo"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsTwo"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                          <label>1.3 Unit prices recieved and revised</label>
                          <Field 
                          name="replyThree"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsThree"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                          <label>1.4 Paint Specification according to dock specification requirements</label>
                          <Field 
                          name="replyFour"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsFour"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                        <button 
                        disabled={invalid || submitting || pristine }
                        type="submit" 
                        className="btn btn-info">
                        Submit
                        </button>
                        <button 
                        style={{marginLeft: '6px'}}
                        onClick={this.props.history.goBack} type="button" 
                        className="btn btn-warning">
                        Cancel
                        </button>
                </form>
            </div>
        </div>
  </div>
</div>
    )
  }
}

export default connect(mapState, actions) (reduxForm({ form: 'checklistForm', enableReinitialize: true, validate }) (CheckListinput));
