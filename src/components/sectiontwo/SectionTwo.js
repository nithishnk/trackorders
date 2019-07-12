import React, { Component } from 'react'
import Img1 from '../../Images/ss1.jpg'
import Img2 from '../../Images/ss2.jpg'
import '../sectiontwo/SectionTwo.css'
export default class SectionTwo extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-8 shad">
      <img className="img-wid" src={Img1}></img>
      </div>
      <div className="col-md-4 shad">
      <img className="img-wid" src={Img2}></img>
      </div>      
      </div>

        
      </div>
    )
  }
}
