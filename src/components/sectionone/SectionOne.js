import React, { Component } from 'react'
import { Button,ButtonToolbar} from 'react-bootstrap';
import '../sectionone/SectionOne.css'



export default class SectionOne extends Component {
  render() {
    return (
      
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-8">
        <h3>Upcoming Trips</h3>
        </div>
        <div className="col-md-4"> 
        <ButtonToolbar className="btn-algn">
        <Button className="btnstyle" variant="primary">Book New Trip</Button>
        </ButtonToolbar>
        </div>
        
        
        <div className="mrgin mt-5 row">
        <h6 className="checkbox-style">Show:</h6>     
<div className="checkbox-style">

<div class="ui checkbox">
  <input type="checkbox" class="hidden" readonly="" tabindex="0" />
  <h6 className="left-align">Flights</h6>
</div>
</div>
<div className="checkbox-style">
<div class="ui checkbox">
  <input type="checkbox" class="hidden" readonly="" tabindex="0" />
  <h6 className="left-align">Hotels</h6>
</div>
</div>
<div className="checkbox-style">
<div class="ui checkbox">
  <input type="checkbox" class="hidden" readonly="" tabindex="0" />
  <h6 className="left-align">Rails</h6>
</div>
</div>
</div>
</div>
        </div>
     
    )
  }
}
