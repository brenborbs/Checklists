import React from 'react';


const listDetail = ({ checklists }) => { // checklist undefined!!
  return (
    <div className="list_wrapper">
              <p><strong>1. Pre-Planning</strong></p>
                  <div className="question" >1.1 Paint Specification received and revised: <strong><p>{checklists.replyOne}</p></strong>
                  <div>Comments:
                    <div className="question_comments" >
                      <strong>{checklists.commentsOne}</strong>
                  </div>
            </div>
        </div>
        <hr/>
                  <div className="question">1.2 Dock Specification received and revised: <strong><p>{checklists.replyTwo}</p></strong>
                  <div>Comments:
                    <div className="question_comments">
                      <strong>{checklists.commentsTwo}</strong>
                  </div>
            </div>
        </div>
        <hr/>
                <div className="question">1.3 Unit prices received and revised: <strong><p>{checklists.replyThree}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsThree}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <div className="question">1.4 Paint Specification according to dock spec requirements: <strong><p>{checklists.replyFour}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsFour}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <div className="question">1.5 Previous docking report received and revised: <strong><p>{checklists.replyFive}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsFive}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <div className="question">1.6 Project identification received and revised: <strong><p>{checklists.replySix}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsSix}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <p><strong>2. Pre-Planning</strong></p>
                <div className="question">2.1 Paint Specification recieved: <strong><p>{checklists.replySeven}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsSeven}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <div className="question">2.2 Personal equipment in good working order: <strong><p>{checklists.replyEight}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsEight}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <div className="question">2.3 Checked with colleagues previous experiences and feedback: <strong><p>{checklists.replyNine}</p></strong>
                <div className="question">2.3.1 Feedback obtained from Yard performance: <strong><p>{checklists.replyTen}</p></strong>
                <div className="question">2.3.2 Feedback obtained from Maunufacturer CA performance: <strong><p>{checklists.replyEleven}</p></strong>
                <div className="question">2.3.3 Feedback obtained from contractor: <strong><p>{checklists.replyTwelve}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsNine}</strong>
                          </div>
                    </div>
                </div>
                <hr/>
                <div className="question">2.4  Contacted Owner and local agent to arrange formalities: <strong><p>{checklists.replyThirteen}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsTen}</strong>
                          </div>
                    </div>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default listDetail;