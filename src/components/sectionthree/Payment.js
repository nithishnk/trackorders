import React, { Component } from 'react'
import { Accordion, Card, Dropdown } from 'react-bootstrap';
import '../sectionthree/SectionThree.css'
import Stepper from '../sectionthree/Stepper'

export default class SectionThree extends Component {
  state = {
    frist: true,
  }
  frist = () => {
    this.setState({
      frist: !this.state.frist
    }
    )
  }
  render() {
    return (
      <> <div class="container C-class">
          <div className="row mx-0">
           <div className="col-md-12 pt-3 accor" >
              <Accordion >
                <Card>
                  <Accordion.Toggle onClick={this.frist} as={Card.Header} eventKey={this.state.frist ? "1" : "0"}> <b>Payment Authorization</b>
          {/* <span className="p-5">London, England</span> San Fransisco, USA */}
      <i class="fas fa-chevron-down F-T-N"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <Stepper/>
                     {/* <div className="p-3"><p>02 Jul 2019</p>
                      </div>
                      <div className="ticket ml-auto p-5">
                      <span className="txt-style">10:30  </span> 
                      <span><i class="fas fa-long-arrow-alt-right"></i></span>
                      <span className="txt-style">12:30</span>
                      <span className="algn">EMIRATES</span>
   </div>*/}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
             </Accordion>
            </div>
          </div>
        </div>
      </>
    )
  }
}
