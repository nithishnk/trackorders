import React, { Component } from 'react'
import { Accordion, Card} from 'react-bootstrap';
import '../sectionthree/SectionThree.css'
import Stepper from '../sectionthree/StepperProcurement'
import '../sectionthree/evolution.css'

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
                  <Accordion.Toggle onClick={this.frist} as={Card.Header} eventKey={this.state.frist ? "1" : "0"}> <b>Procurement</b>
                  <i class="fas fa-chevron-down F-T-N"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                  <Card.Body>
                  <div className="container" >
                  <div style={{position:"relative"}}>
                    <div className="row">
                    <span className="crcl"> 1</span>
                    <span className="ml-3">Procuring</span>
                    </div>
                    <div className="timeline"></div>
                    </div>
                    <div style={{position:"relative", paddingTop :"57px"}}>
                    <div className="row">
                    <span className="crcl"> 2</span>
                    <span className="ml-3">Procured</span>
                    
                    </div>
                    
                    </div>
                    </div>
                    
                    
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
