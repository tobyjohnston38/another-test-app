import React, { Component } from "react"
import { buttonComponent as ButtonComponent } from "./buttonComponent"

class FooterComponent extends Component {
  state = {
    timeOfDay: undefined
  }

  handleButtonClick(event) {
    alert("this button was clicked!")
  }

  // counter = 1

  // preProcessingHandleButtonClick = (event) => {
  // this.counter += 1
  //  this.handleButtonClick(event, this.counter)
  // }

  render() {
    return (
      <>
        <p>{`${this.props.footerText} ${this.state.timeOfDay}`}</p>
        <ButtonComponent
          onClick={this.handleButtonClick}
          buttonText={"Click me!"}
        />
      </>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      var currentHour = new Date().getHours()
      var timeOfDay = currentHour >= 12 ? "afternoon!" : "morning!"
      this.setState({ timeOfDay })
    }, 3000)
  }
}

export default FooterComponent
