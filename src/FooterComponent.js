import React, { Component } from 'react'

class FooterComponent extends Component {
 state = {
  timeOfDay: undefined
 }

 render() {
  return (<p>{`${this.props.footerText} ${this.state.timeOfDay}`}</p>)
 }

 componentDidMount() {
  setTimeout(() => {
   var currentHour = new Date().getHours() 
   var timeOfDay = currentHour >= 12 ? 'afternoon!' : 'morning!'
   this.setState({ timeOfDay })
  }, 3000)
 }
} 

export default FooterComponent