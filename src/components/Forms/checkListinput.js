import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  combineValidators,
  composeValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import {
  createChecklist,
  updateChecklists
} from "../../actions/checkListActions";

// import SelectInput from './select';
import TextArea from "./textArea";

const mapState = (state, ownProps) => {
  const checklistId = ownProps.match.params.id;

  let checklists = {};

  if (checklistId && state.checklists.length > 0) {
    checklists = state.checklists.filter(
      checklists => checklists.id === checklistId
    )[0];
  }

  return {
    // error!!!
    initialValues: checklists
  };
};

const actions = {
  createChecklist,
  updateChecklists
};

const validate = combineValidators({
  commentsOne: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsTwo: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsThree: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 10 characters"
    })
  )(),
  commentsFour: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsFive: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsSix: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsSeven: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsEight: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsNine: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsTen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsEleven: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsTwelve: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsThirteen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsFourteen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsFifteen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsSixteen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsSeventeen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsEighteen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
  commentsNineteen: composeValidators(
    isRequired({ message: "Please enter comments" }),
    hasLengthGreaterThan(5)({
      message: "Comment body must be at least more than 5 characters"
    })
  )(),
});

class CheckListinput extends Component {
  onFormSubmit = values => {
    // not working!!! no errors!!
    if (this.props.initialValues.id) {
      this.props.updateChecklists(values);
      this.props.history.goBack();
    } else {
      const newChecklist = {
        ...values,
        id: cuid()
      };
      this.props.createChecklist(newChecklist);
      console.log(newChecklist);
      this.props.history.push("/");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;

    return (
      <div className="center_wrapper">
        <div className="inside_wrapper">
          <h5 className="center-title">Checklist for Drydockings</h5>
          <div className="form_wrapper">
            <p>
              <strong>1. Pre-Planning</strong>
            </p>
            <div className="inside_form">
              <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <label>1.1 Paint Specification received and revised</label>
                <Field name="replyOne" component="select">
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
                <Field name="replyTwo" component="select">
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
                <Field name="replyThree" component="select">
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

                <label>
                  1.4 Paint Specification according to dock specification
                  requirements
                </label>
                <Field name="replyFour" component="select">
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
                <Field name="replyFive" component="select">
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
                <Field name="replySix" component="select">
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
                <div>
                  <p>
                    <strong>2. Pre-Planning</strong>
                  </p>
                </div>

                <label>2.1 Paint Specification received</label>
                <Field name="replySeven" component="select">
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
                <Field name="replyEight" component="select">
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

                <label>
                  2.3 Checked with colleagues previous experiences and feedback
                </label>
                <Field name="replyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>2.3.1 Feedback obtained from Yard performance</label>
                <Field name="replyTen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  2.3.2 Feedback obtained from Maunufacturer CA performance
                </label>
                <Field name="replyEleven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>2.3.3 Feedback obtained from contractor</label>
                <Field name="replyTwelve" component="select">
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

                <label>
                  2.4 Contacted Owner and local agent to arrange formalities
                </label>
                <Field name="replyThirteen" component="select">
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

                <label>
                  2.5 Checked with local agent the need of documentation for
                  gate pass
                </label>
                <Field name="replyFourteen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsEleven"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />

                <label>2.6 Requested local number to the agent</label>
                <Field name="replyFifteen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsTwelve"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <hr />
                <div>
                  <p>
                    <strong>3. On-Site Meetings</strong>
                  </p>
                </div>
                <label>
                  3.1.1 One to one meeting with attending superintendent
                </label>
                <Field name="replySixteen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.1.2 Revised paint specification and work scope</label>
                <Field name="replySeventeen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.1.3 Confirmed undocking gate during meetings</label>
                <Field name="replyEighteen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.1.4 Washing pressure agreed during mettings</label>
                <Field name="replyNineteen" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.1.5 Well maintained equipment used</label>
                <Field name="replyTwenty" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.1.6 Hand guns used discussion and meetings</label>
                <Field name="replyTwentyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  3.1.7 Requirement of extra time and use of cherry pickers for
                  DFT readings
                </label>
                <Field name="replyTwentyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.1.8 Our recommendations to be strictly followed</label>
                <Field name="replyTwentyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  3.1.9 Yard unit prices and missing documentation requested to
                  SI
                </label>
                <Field name="replyTwentyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  3.2.0 Trade pattern Av speed, water temp, ice, fouling ,
                  activity level
                </label>
                <Field name="replyTwentyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.2.1 Same trade pattern after current drydocking</label>
                <Field name="replyTwentySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsThirteen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <label>3.2.2 Kick-off meeting with Yard and manufacturer</label>
                <Field name="replyTwentySeven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.2.3 All involved parties attended</label>
                <Field name="replyTwentyEight" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  3.2.4 Working program and schedule provided by the Yard
                </label>
                <Field name="replyTwentyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.2.5 Joint In-Docking evaluation</label>
                <Field name="replyThirty" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.2.6 Sufficient lights installed on dock bottom</label>
                <Field name="replyThirtyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.2.7 Washing equipment in good working order</label>
                <Field name="replyThirtyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>3.2.8 Pressure for washing as specified</label>
                <Field name="replyThirtyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  3.2.9 Yard QC and manufacturer present on inspection
                </label>
                <Field name="replyThirtyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.0 Extent agreement after Washing in order</label>
                <Field name="replyThirtyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.1.1 Hydro-Jetting equipment in good working order
                </label>
                <Field name="replyThirtySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.1.2 Washing water of clean condition</label>
                <Field name="replyThirtySeven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.1.3 Powertooling feathering and squares achieved
                </label>
                <Field name="replyThirtyEight" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.1.4 Paint equipment to be in good working order</label>
                <Field name="replyThirtyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.1.5 Paint distribution done during spray painting activities
                </label>
                <Field name="replyForty" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.1.6 Hand Guns used during spray painting activities
                </label>
                <Field name="replyFortyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.1.7 WFT gauges test and done during spray painting
                  activities
                </label>
                <Field name="replyFortyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.1.8 Adequate spraying technique by worker</label>
                <Field name="replyFortyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.1.9 Pot man trained on mixing and thining</label>
                <Field name="replyFortyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.2.0 DFT reading carried-out on each coating</label>
                <Field name="replyFortyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.2.1 Overcoating intervals followed on each coating
                </label>
                <Field name="replyFortySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.2.2 AC thickness achieved on each coating</label>
                <Field name="replyFortySeven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.2.3 Anti-fouling re-application after completion
                </label>
                <Field name="replyFortyEight" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsFourteen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <hr />
                <div>
                  <p>
                    <strong>4. High-pressure washing</strong>
                  </p>
                </div>
                <label>4.0.0 In-Docking Evaluation with shipyard</label>
                <Field name="replyFortyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.1 Light installed properly on Dock bottom</label>
                <Field name="replyFifty" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>
                  4.0.2 Manual scraping required on vertical and bottom hull
                </label>
                <Field name="replyFiftyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.3 Washing pressure as specification</label>
                <Field name="replyFiftyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.4 Washing equipment approved and inspected</label>
                <Field name="replyFiftyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.5 Washing pattern from top to bottom hull</label>
                <Field name="replyFiftyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.6 HP Washing inspection approved</label>
                <Field name="replyFiftyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.7 Hull protections installed satisfactorily</label>
                <Field name="replyFiftySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>4.0.8 Hull re-washing required after inspection</label>
                <Field name="replyFiftySeven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsFifteen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <hr/>
                <div>
                  <p>
                    <strong>5. Hydro-Jetting</strong>
                  </p>
                </div>
                <label>5.0.0 Surface extent agreement done upon washing completion</label>
                <Field name="replyFiftyEight" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.1 Areas agreed on sq.meter and signed</label>
                <Field name="replyFiftyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.2 Have you obtained a physical copy of the agreement</label>
                <Field name="replySixty" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsSixteen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <label>5.0.3 All equipment checked and in good working order</label>
                <Field name="replySixtyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.4 Nozzle and hoses connections in good condition</label>
                <Field name="replySixtyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.5 Equipment operators killed and well trained</label>
                <Field name="replySixtyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.6 Personnel provided with proper safety equipment</label>
                <Field name="replySixtyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsSeventeen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <label>5.0.7 Hydro-Jetting acceptable cleanliness standard achieved</label>
                <Field name="replySixtyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.8 Feathering to intact paint system achieved</label>
                <Field name="replySixtySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.0.9 Formed in squares surface treatment achieved</label>
                <Field name="replySixtySeven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.1.0 Surface profile treatment achieved and checked</label>
                <Field name="replySixtyEight" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.1.1 Dirt free surface achieved and checked</label>
                <Field name="replySixtyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.1.2 Chloride tests acceptable and checked</label>
                <Field name="replySeventy" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.1.3 Hull condensation free and checked</label>
                <Field name="replySeventyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.1.4 Microclimate readings acceptable and checked</label>
                <Field name="replySeventyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>5.1.5 Flash rust acceptable and checked during inspection</label>
                <Field name="replySeventyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsEighteen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <hr/>
                <div>
                  <p>
                    <strong>6. Painting Equipment</strong>
                  </p>
                </div>
                <label>6.0.1 Spray pumps in good working order and checked</label>
                <Field name="replySeventyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.2 Suction pump mesh replaced daily and checked</label>
                <Field name="replySeventyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.3 Clean air supplied during spray painting</label>
                <Field name="replySeventySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.4 Working pressure gauge on painting equipment</label>
                <Field name="replySeventySeven" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.5 Hand guns used during spray painting</label>
                <Field name="replySeventyEight" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.6 Hand gun filter replaced daily during spray painting</label>
                <Field name="replySeventyNine" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.7 Adequate nozzle tips used during spray painting</label>
                <Field name="replyEighty" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.8 Mechanical paddles as mixing method used during spray painting</label>
                <Field name="replyEightyOne" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.0.9 WFT gauges available and clean during spray painting</label>
                <Field name="replyEightyTwo" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.1.0 Safety equipment available during spray painting</label>
                <Field name="replyEightyThree" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <Field
                  name="commentsNineteen"
                  type="text"
                  component={TextArea}
                  placeholder="Comments Here..."
                />
                <label>6.1.1 Skilled personnel available during spray painting</label>
                <Field name="replyEightyFour" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.1.2 Sprayers good technique during painting operation</label>
                <Field name="replyEightyFive" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <label>6.1.3 WFT measurements done during painting operation</label>
                <Field name="replyEightySix" component="select">
                  <option />
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>




                <div className="button_wrap">
                  <button
                    disabled={invalid || submitting || pristine}
                    type="submit"
                    className="btn btn-info"
                  >
                    Submit
                  </button>
                  <button
                    style={{ marginLeft: "6px" }}
                    onClick={this.props.history.goBack}
                    type="button"
                    className="btn btn-warning"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "checklistForm", enableReinitialize: true, validate })(
    CheckListinput
  )
);
