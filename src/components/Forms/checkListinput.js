import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { combineValidators, composeValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import cuid from 'cuid';
import { createChecklist, updateChecklists } from '../../actions/checkListActions';

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
  createChecklist,
  updateChecklists
}

const validate = combineValidators({
  commentsOne: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsTwo: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsThree: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 10 characters'})
  )(),
  commentsFour: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsFive: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsSix: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsSeven: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsEight: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsNine: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
  commentsTen: composeValidators(
    isRequired({message: 'Please enter comments'}),
    hasLengthGreaterThan(5)({message: 'Comment body must be at least more than 5 characters'})
  )(),
})

 class CheckListinput extends Component {

  onFormSubmit = values => {

    // not working!!! no errors!!
    if (this.props.initialValues.id) {
      this.props.updateChecklists(values);
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

                          <label>1.5 Previous docking report received and revised</label>
                          <Field 
                          name="replyFive"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsFive"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                          <label>1.6 Project identification received and revised</label>
                          <Field 
                          name="replySix"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsSix"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />
                        <hr />
                        <div><p><strong>2. Pre-Planning</strong></p></div>
                        
                        <label>2.1 Paint Specification received</label>
                          <Field 
                          name="replySeven"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsSeven"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                          <label>2.2 Personal equipment in good working order</label>
                          <Field 
                          name="replyEight"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsEight"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />

                          <label>2.3 Checked with colleagues previous experiences and feedback</label>
                          <Field 
                          name="replyNine"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <label>2.3.1 Feedback obtained from Yard performance</label>
                          <Field 
                          name="replyTen"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <label>2.3.2 Feedback obtained from Maunufacturer CA performance</label>
                          <Field 
                          name="replyEleven"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <label>2.3.3 Feedback obtained from contractor</label>
                          <Field 
                          name="replyTwelve"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsNine"
                          type="text"
                          component={TextArea}
                          placeholder="Comments Here..."
                          />
                          
                          <label>2.4 Contacted Owner and local agent to arrange formalities</label>
                          <Field 
                          name="replyThirteen"
                          component="select"
                          >
                          <option />
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </Field>
                          <Field 
                          name="commentsTen"
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
