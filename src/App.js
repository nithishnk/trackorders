import React, { Component } from 'react'
import SectionOne from '../src/components/sectionone/SectionOne'
import SectionTwo from '../src/components/sectiontwo/SectionTwo'
import Checkout from '../src/components/sectionthree/Checkout'
import Payment from '../src/components/sectionthree/Payment'
import Destination from '../src/components/sectionthree/Destination'
import Procurement from '../src/components/sectionthree/Procurement'
import Fulfilment from '../src/components/sectionthree/Fulfilment'

export default class App extends Component {
  render() {
    return (
      <div>
       <SectionOne/> 
       <SectionTwo/>
       <Checkout/>
       <Payment/>
       <Destination/>
       <Procurement/>
       <Fulfilment/>
      </div>
    )
  }
}
