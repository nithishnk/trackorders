import React, { Component } from 'react'
import { Accordion, Card, Dropdown } from 'react-bootstrap';
import '../sectionthree/SectionThree.css'
import Stepper from '../sectionthree/StepperPayment'

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
                  <i class="fas fa-chevron-down F-T-N"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <Stepper/>
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
