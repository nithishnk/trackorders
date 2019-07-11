import React, { Component } from 'react'
import SectionOne from '../src/components/sectionone/SectionOne'
import SectionTwo from '../src/components/sectiontwo/SectionTwo'
import SectionThree from '../src/components/sectionthree/SectionThree'
export default class App extends Component {
  render() {
    return (
      <div>
       <SectionOne/> 
       <SectionTwo/>
       <SectionThree/>
       <SectionThree/>
       <SectionThree/>
       <SectionThree/>
      </div>
    )
  }
}
