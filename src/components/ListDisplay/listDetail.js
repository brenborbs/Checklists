import React from 'react';


const listDetail = ({ checklists }) => { // checklist undefined!!
  return (
    <div>
              <p><strong>1. Pre-Planning</strong></p>
                  <div className="question" >1.1 Paint Specification received and revised: <strong><p>{checklists.replyOne}</p></strong>
                  <div className="question_comments">Comments:
                      <p><strong>{checklists.commentsOne}</strong></p>
            </div>
        </div>
                  <div className="question">1.2 Dock Specification received and revised: <strong><p>{checklists.replyTwo}</p></strong>
                  
                    <div className="question_comments">Comments:
                      <p><strong>{checklists.commentsTwo}</strong></p>
            </div>
        </div>
                <div className="question">1.3 Unit prices received and revised: <strong><p>{checklists.replyThree}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsThree}</strong></p>
                          
                    </div>
                </div>
                <div className="question">1.4 Paint Specification according to dock spec requirements: <strong><p>{checklists.replyFour}</p></strong>
                         
                            <div className="question_comments">Commets:
                              <p><strong>{checklists.commentsFour}</strong></p>
                          
                    </div>
                </div>
                
                <div className="question">1.5 Previous docking report received and revised: <strong><p>{checklists.replyFive}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsFive}</strong></p>
                          
                    </div>
                </div>
                
                <div className="question">1.6 Project identification received and revised: <strong><p>{checklists.replySix}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsSix}</strong></p>
                          
                    </div>
                </div>
                <hr/>
                <p><strong>2. Pre-Planning</strong></p>
                <div className="question">2.1 Paint Specification recieved: <strong><p>{checklists.replySeven}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsSeven}</strong></p>
                          
                    </div>
                </div>
                
                <div className="question">2.2 Personal equipment in good working order: <strong><p>{checklists.replyEight}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsEight}</strong></p>
                        
                    </div>
                </div>
                
                <div className="question">2.3 Checked with colleagues previous experiences and feedback: <strong><p>{checklists.replyNine}</p></strong>
                <div className="question">2.3.1 Feedback obtained from Yard performance: <strong><p>{checklists.replyTen}</p></strong>
                <div className="question">2.3.2 Feedback obtained from Maunufacturer CA performance: <strong><p>{checklists.replyEleven}</p></strong>
                
                <div className="question">2.3.3 Feedback obtained from contractor: <strong><p>{checklists.replyTwelve}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsNine}</strong></p>
                         
                    </div>
                </div>
                
                <div className="question">2.4  Contacted Owner and local agent to arrange formalities: <strong><p>{checklists.replyThirteen}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTen}</strong></p>
                         
                    </div>
                </div>
                
                <div className="question">2.5 Checked with local agent the need of documentation for gate pass: <strong><p>{checklists.replyFourteen}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsEleven}</strong></p>
                          
                    </div>
                </div>
                
                <div className="question">2.6 Requested local number to the agent: <strong><p>{checklists.replyFifteen}</p></strong>
                          
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwelve}</strong></p>
                          
                    </div>
                </div>
                <hr/>
                <p style={{ color: 'black' }} ><strong>3. On Site-Meetings</strong></p>
                <div className="question">3.1.1 One to one meeting with attending superintendent: <strong><p>{checklists.replySixteen}</p></strong></div>

                <div className="question">3.1.2 Revised paint specification and work scope: <strong><p>{checklists.replySeventeen}</p></strong></div>

                <div className="question">3.1.3 Confirmed undocking gate: <strong><p>{checklists.replyEighteen}</p></strong></div>

                <div className="question">3.1.4 Washing pressure agreed: <strong><p>{checklists.replyNineteen}</p></strong></div>

                <div className="question">3.1.5 Well maintained equipment used: <strong><p>{checklists.replyTwenty}</p></strong></div>

                <div className="question">3.1.6 Hand guns used: Meetings <strong><p>{checklists.replyTwentyOne}</p></strong></div>

                <div className="question">3.1.7 Reqts. of extra time and use of cherry pickers for DFT readings: <strong><p>{checklists.replyTwentyTwo}</p></strong></div>

                <div className="question">3.1.8 Our recommendations to be strictly followed: <strong><p>{checklists.replyTwentyThree}</p></strong></div>

                <div className="question">3.1.9 Yard unit prices and missing documentation requested to SI: <strong><p>{checklists.replyTwentyFour}</p></strong></div>

                <div className="question">3.2.0 Trade pattern Av speed, water temp, ice, fouling , activity level: <strong><p>{checklists.replyTwentyFive}</p></strong></div>

                <div className="question">3.2.1 Same trade pattern after current drydocking: <strong><p>{checklists.replyTwentySix}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsThirteen}</strong></p>
                    </div>
                    </div>

                    <div className="question">3.2.2 Kick-off meeting with Yard and manufacturer: <strong><p>{checklists.replyTwentySeven}</p></strong></div>

                    <div className="question">3.2.3 All parties attended: <strong><p>{checklists.replyTwentyEight}</p></strong></div>

                    <div className="question">3.2.4 Working program and schedule provided by the Yard: <strong><p>{checklists.replyTwentyNine}</p></strong></div>

                    <div className="question">3.2.5 Joint In-Docking evaluation: <strong><p>{checklists.replyThirty}</p></strong></div>

                    <div className="question">3.2.6 Sufficient lights installed on dock bottom: <strong><p>{checklists.replyThirtyOne}</p></strong></div>

                    <div className="question">3.2.7 Washing equipment in good working order: <strong><p>{checklists.replyThirtyTwo}</p></strong></div>

                    <div className="question">3.2.8 Pressure for washing as specified: <strong><p>{checklists.replyThirtyThree}</p></strong></div>

                    <div className="question">3.2.9 Yard QC and manufacturer present on inspection: <strong><p>{checklists.replyThirtyFour}</p></strong></div>

                    <div className="question">4.0.0 Extent agreement after Washing in order: <strong><p>{checklists.replyThirtyFive}</p></strong></div>

                    <div className="question">4.1.1 Hydro-Jetting equipment in good working order: <strong><p>{checklists.replyThirtySix}</p></strong></div>

                    <div className="question">4.1.2 Washing water of clean condition: <strong><p>{checklists.replyThirtySeven}</p></strong></div>

                    <div className="question">4.1.3 Powertooling feathering and squares achieved: <strong><p>{checklists.replyThirtyEight}</p></strong></div>

                    <div className="question">4.1.4 Paint equipment to be in good working order: <strong><p>{checklists.replyThirtyNine}</p></strong></div>

                    <div className="question">4.1.5 Paint distribution done during spray painting activities: <strong><p>{checklists.replyForty}</p></strong></div>

                    <div className="question">4.1.6 Hand Guns used during spray painting activities: <strong><p>{checklists.replyFortyOne}</p></strong></div>

                    <div className="question">4.1.7 WFT gauges test and done during spray painting activities: <strong><p>{checklists.replyFortyTwo}</p></strong></div>

                    <div className="question">4.1.8 Adequate spraying technique by worker : <strong><p>{checklists.replyFortyThree}</p></strong></div>

                    <div className="question">4.1.9 Pot man trained on mixing and thining : <strong><p>{checklists.replyFortyFour}</p></strong></div>

                    <div className="question">4.2.0 DFT reading done on each coating : <strong><p>{checklists.replyFortyFive}</p></strong></div>

                    <div className="question">4.2.1 Overcoating intervals followed on each coating : <strong><p>{checklists.replyFortySix}</p></strong></div>

                    <div className="question">4.2.2 AC thickness achieved on each coating : <strong><p>{checklists.replyFortySeven}</p></strong></div>

                    <div className="question">4.2.3 Anti-fouling re-application after completion : <strong><p>{checklists.replyFortyEight}</p></strong> 
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsFourteen}</strong></p>
                    </div>
                    </div>
                    <hr/>
                    <p><strong style={{ color: 'black' }} >4. High-Pressure Washing</strong></p>
                    <div className="question">4.0.0 In-Docking evaluation with shipyard : <strong><p>{checklists.replyFortyNine}</p></strong></div>

                    <div className="question">4.0.1 Lighting installed properly on Dock bottom : <strong><p>{checklists.replyFifty}</p></strong></div>

                    <div className="question">4.0.2 Manual scraping required on vertical and bottom hull : <strong><p>{checklists.replyFiftyOne}</p></strong></div>

                    <div className="question">4.0.3 Washing pressure as specification : <strong><p>{checklists.replyFiftyTwo}</p></strong></div>

                    <div className="question">4.0.4 Washing equipment inspected and approved : <strong><p>{checklists.replyFiftyThree}</p></strong></div>

                    <div className="question">4.0.5 Washing pattern from top to bottom : <strong><p>{checklists.replyFiftyFour}</p></strong></div>

                    <div className="question">4.0.6 HP Washing inspection approved : <strong><p>{checklists.replyFiftyFive}</p></strong></div>

                    <div className="question">4.0.7 Hull protections installed satisfactorily : <strong><p>{checklists.replyFiftySix}</p></strong></div>

                    <div className="question">4.0.8 Hull re-washing required after inspection: <strong><p>{checklists.replyFiftySeven}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsFifteen}</strong></p>
                    </div>
                    </div>
                    <hr/>
                    <p><strong style={{ color: 'black' }} >5. Hydro-Jetting</strong></p>
                    <div className="question">5.0.0 Surface extent agreement done upon washing completion: <strong><p>{checklists.replyFiftyEight}</p></strong></div>

                    <div className="question">5.0.1 Areas agreed on sq.meter and signed: <strong><p>{checklists.replyFiftyNine}</p></strong></div>

                    <div className="question">5.0.2 Have you obtained a physical copy of the agreement: <strong><p>{checklists.replySixty}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsSixteen}</strong></p>
                    </div>
                    </div>
                    <div className="question">5.0.3 All equipment checked and in good working order: <strong><p>{checklists.replySixtyOne}</p></strong></div>

                    <div className="question">5.0.4 Nozzle and hoses connections in good condition: <strong><p>{checklists.replySixtyTwo}</p></strong></div>

                    <div className="question">5.0.5 Equipment operators killed and well trained: <strong><p>{checklists.replySixtyThree}</p></strong></div>

                    <div className="question">5.0.6 Personnel provided with proper safety equipment: <strong><p>{checklists.replySixtyFour}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsSeventeen}</strong></p>
                    </div>
                    </div>
                    <div className="question">5.0.7 Hydro-Jetting acceptable cleanliness standard achieved: <strong><p>{checklists.replySixtyFive}</p></strong>
                    </div>
                    <div className="question">5.0.8 Feathering to intact paint system achieved: <strong><p>{checklists.replySixtySix}</p></strong>
                    </div>
                    <div className="question">5.0.9 Formed in squares surface treatment achieved: <strong><p>{checklists.replySixtySeven}</p></strong>
                    </div>
                    <div className="question">5.1.0 Surface profile treatment achieved and checked: <strong><p>{checklists.replySixtyEight}</p></strong>
                    </div>
                    <div className="question">5.1.1 Dirt free surface achieved and checked: <strong><p>{checklists.replySixtyNine}</p></strong>
                    </div>
                    <div className="question">5.1.2 Chloride tests acceptable and checked: <strong><p>{checklists.replySeventy}</p></strong>
                    </div>
                    <div className="question">5.1.3 Hull condensation free and checked: <strong><p>{checklists.replySeventyOne}</p></strong>
                    </div>
                    <div className="question">5.1.4 Microclimate readings acceptable and checked: <strong><p>{checklists.replySeventytwo}</p></strong>
                    </div>
                    <div className="question">5.1.5 Flash rust acceptable and checked during inspection: <strong><p>{checklists.replySeventyThree}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsEighteen}</strong></p>
                    </div>
                    </div>
                    <hr/>
                    <p><strong style={{ color: 'black' }} >6. Painting Equipment</strong></p>
                    <div className="question">6.0.1 Spray pumps in good working order: <strong><p>{checklists.replySeventyFour}</p></strong>
                    </div>
                    <div className="question">6.0.2 Suction pump mesh replaced daily and checked: <strong><p>{checklists.replySeventyFive}</p></strong>
                    </div>
                    <div className="question">6.0.3 Clean air supplied during spray painting: <strong><p>{checklists.replySeventySix}</p></strong>
                    </div>
                    <div className="question">6.0.4 Working pressure gauge on painting equipment: <strong><p>{checklists.replySeventySeven}</p></strong>
                    </div>
                    <div className="question">6.0.5 Hand guns used during spray painting: <strong><p>{checklists.replySeventyEight}</p></strong>
                    </div>
                    <div className="question">6.0.6 Hand gun flter replaced daily during spray painting: <strong><p>{checklists.replySeventyNine}</p></strong>
                    </div>
                    <div className="question">6.0.7 Adequate nozzle tips used during spray painting during spray painting: <strong><p>{checklists.replyEighty}</p></strong>
                    </div>
                    <div className="question">6.0.8 Mechanical paddles as mixing method used during spray painting: <strong><p>{checklists.replyEightyOne}</p></strong>
                    </div>
                    <div className="question">6.0.9 WFT gauges available and clean during spray painting: <strong><p>{checklists.replyEightyTwo}</p></strong>
                    </div>
                    <div className="question">6.1.0 Safety equipment available during spray painting: <strong><p>{checklists.replyEightyThree}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsNineteen}</strong></p>
                    </div>
                    </div>
                    <div className="question">6.1.1 Skilled personnel available during spray painting: <strong><p>{checklists.replyEightyFour}</p></strong>
                    </div>
                    <div className="question">6.1.2 Sprayers good technique during painting operation: <strong><p>{checklists.replyEightyFive}</p></strong>
                    </div>
                    <div className="question">6.1.3 WFT measurements done during painting operation: <strong><p>{checklists.replyEightySix}</p></strong>
                    </div>
                    <div className="question">6.1.4 Pot man mixing and thinning trained: <strong><p>{checklists.replyEightySeven}</p></strong>
                    </div>
                    <div className="question">6.1.5 Instructions followed during spray painting: <strong><p>{checklists.replyEightyEight}</p></strong>
                    </div>
                    <div className="question">6.1.6 Good distance from surface to coat checked: <strong><p>{checklists.replyEightyNine}</p></strong>
                    </div>
                    <div className="question">6.1.7 Good angle technique checked during spray painting: <strong><p>{checklists.replyNinety}</p></strong>
                    </div>
                    <div className="question">6.1.8 Shipyard Quality Control present during spray painting: <strong><p>{checklists.replyNinetyOne}</p></strong>
                    </div>
                    <div className="question">6.1.9 Paint foreman present during spray painting: <strong><p>{checklists.replyNinetyTwo}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwenty}</strong></p>
                    </div>
                    </div>
                    <div className="question">6.2.0 Paint consumption within reasonable quantities: <strong><p>{checklists.replyNinetyThree}</p></strong>
                    </div>
                    <div className="question">6.2.1 Paint distribution to each pump accordingly to the area of application: <strong><p>{checklists.replyNinetyFour}</p></strong>
                    </div>
                    <div className="question">6.2.2 Paint re-application done after initial checking: <strong><p>{checklists.replyNinetyFive}</p></strong>
                    </div>
                    <div className="question">6.2.3 Anticorrosive DFT reached as per specification: <strong><p>{checklists.replyNinetySix}</p></strong>
                    </div>
                    <div className="question">6.2.4 Overcoating intervals followed during spray painting: <strong><p>{checklists.replyNinetySeven}</p></strong>
                    </div>
                    <div className="question">6.2.5 Surface dust free between coats checked: <strong><p>{checklists.replyNinetyEight}</p></strong>
                    </div>
                    <div className="question">6.2.6 Microclimate condition acceptable during spray painting: <strong><p>{checklists.replyNinetyNine}</p></strong>
                    </div>
                    <div className="question">6.2.7 Rain observed during spray painting: <strong><p>{checklists.replyHundred}</p></strong>
                    </div>
                    <div className="question">6.2.8 Wind speed within the acceptable limits during paint application: <strong><p>{checklists.replyHundredOne}</p></strong>
                    </div>
                    <div className="question">6.2.9 Paint consumption controlled during paint application: <strong><p>{checklists.replyHundredTwo}</p></strong>
                    </div>
                    <div className="question">6.3.0 All drums well consumed during paint application: <strong><p>{checklists.replyHundredThree}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyOne}</strong></p>
                    </div>
                    </div>
                    <hr/>
                    <p><strong style={{ color: 'black' }} >7. Painting Manufacturer</strong></p>
                    <div className="question">7.0.1 Paint quantities delivered as specification: <strong><p>{checklists.replyHundredFour}</p></strong>
                    </div>
                    <div className="question">7.0.2 Delivery checked by JMC and manufacturer together: <strong><p>{checklists.replyHundredFive}</p></strong>
                    </div>
                    <div className="question">7.0.3 Obtained a copy of delivery tickets: <strong><p>{checklists.replyHundredSix}</p></strong>
                    </div>
                    <div className="question">7.0.4 Paints safely stored On-Site by yard/paint manufacturer: <strong><p>{checklists.replyHundredSeven}</p></strong>
                    </div>
                    <div className="question">7.0.5 Batch number on paints recorded and checked: <strong><p>{checklists.replyHundredEight}</p></strong>
                    </div>
                    <div className="question">7.0.6 Extra paint ordered by paint manufacturer: <strong><p>{checklists.replyHundredNine}</p></strong>
                    </div>
                    <div className="question">7.0.7 Paint distributed adequately by paint manufacturer: <strong><p>{checklists.replyHundredTen}</p></strong>
                    </div>
                    <div className="question">7.0.8 Mixing and thinning done correctly during spray painting: <strong><p>{checklists.replyHundredEleven}</p></strong>
                    </div>
                    <div className="question">7.0.9 Un-used paints returned and recorded after spray painting: <strong><p>{checklists.replyHundredTwelve}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyTwo}</strong></p>
                    </div>
                    </div>
                    <div className="question">7.1.0 Manufacturer CA available during painting operation: <strong><p>{checklists.replyHundredThirteen}</p></strong>
                    </div>
                    <div className="question">7.1.1 Paint maker present during kick-off meeting: <strong><p>{checklists.replyHundredFourteen}</p></strong>
                    </div>
                    <div className="question">7.1.2 Paint maker present during in-docking evaluation: <strong><p>{checklists.replyHundredFifteen}</p></strong>
                    </div>
                    <div className="question">7.1.3 Paint maker present during blasting operations: <strong><p>{checklists.replyHundredSixteen}</p></strong>
                    </div>
                    <div className="question">7.1.4 Chloride test done by Paint maker: <strong><p>{checklists.replyHundredSeventeen}</p></strong>
                    </div>
                    <div className="question">7.1.5 Profile test done by Paint maker: <strong><p>{checklists.replyHundredEighteen}</p></strong>
                    </div>
                    <div className="question">7.1.6 Dust test done by Paint maker: <strong><p>{checklists.replyHundredNineteen}</p></strong>
                    </div>
                    <div className="question">7.1.7 Paint maker present during paint application: <strong><p>{checklists.replyHundredTwenty}</p></strong>
                    </div>
                    <div className="question">7.1.8 Did Paint maker revised the equipment during paint application?: <strong><p>{checklists.replyHundredTwentyOne}</p></strong>
                    </div>
                    <div className="question">7.1.9 Microclimate readings taken by Paint maker?: <strong><p>{checklists.replyHundredTwentyTwo}</p></strong>
                    </div>
                    <div className="question">7.2.0 Wet Film Thickness readings taken by Paint maker?: <strong><p>{checklists.replyHundredTwentyThree}</p></strong>
                    </div>
                    <div className="question">7.2.1 Instructions given to the sprayers and Pot man?: <strong><p>{checklists.replyHundredTwentyFour}</p></strong>
                    </div>
                    <div className="question">7.2.2 DFT reading done by Paint maker after each coating: <strong><p>{checklists.replyHundredTwentyFive}</p></strong>
                    </div>
                    <div className="question">7.2.3 Distribution of paints by Paint maker before painting application: <strong><p>{checklists.replyHundredTwentySix}</p></strong>
                    </div>
                    <div className="question">7.2.4 Corrected bad spraying techniques by Paint maker: <strong><p>{checklists.replyHundredTwentySeven}</p></strong>
                    </div>
                    <div className="question">7.2.5 Controlled paint quantities by Paint maker: <strong><p>{checklists.replyHundredTwentyEight}</p></strong>
                    </div>
                    <div className="question">7.2.6 Was Paint maker available throughout the project?: <strong><p>{checklists.replyHundredTwentyNine}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyThree}</strong></p>
                    </div>
                    </div>
                    <hr/>
                    <p><strong style={{ color: 'black' }} >8. Reporting and Inspections</strong></p>
                    <div className="question">8.0.1 Daily report sent at the end of each working day: <strong><p>{checklists.replyHundredThirty}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyFour}</strong></p>
                    </div>
                    </div>
                    <div className="question">8.0.2 Water Ballast Tanks inspected during this time around?: <strong><p>{checklists.replyHundredThirtyOne}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyFive}</strong></p>
                    </div>
                    </div>
                    <div className="question">8.0.3 Cargo Tanks inspected during this time around?: <strong><p>{checklists.replyHundredThirtyTwo}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentySix}</strong></p>
                    </div>
                    </div>
                    <div className="question">8.0.4 General Exteriors inspected during this time around?: <strong><p>{checklists.replyHundredThirtyThree}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentySeven}</strong></p>
                    </div>
                    </div>
                    <div className="question">8.0.5 Paint Locker inspected during this time around?: <strong><p>{checklists.replyHundredThirtyFour}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyEight}</strong></p>
                    </div>
                    </div>
                    <div className="question">8.0.6 Audit of the on-board paint maintenance processes: <strong><p>{checklists.replyHundredThirtyFive}</p></strong>
                            <div className="question_comments">Comments:
                              <p><strong>{checklists.commentsTwentyNine}</strong></p>
                    </div>
                    </div>


            </div>
          </div>
      </div>
    </div>

  );
};

export default listDetail;