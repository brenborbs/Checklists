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
                <div className="question">1.4 Paint Specification according to dock specification requirements: <strong><p>{checklists.replyFour}</p></strong>
                          <div>Comments:
                            <div className="question_comments">
                              <strong>{checklists.commentsFour}</strong>
                          </div>
                    </div>
                </div>


    </div>
  );
};

export default listDetail;