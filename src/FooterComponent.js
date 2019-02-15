import React, { Component } from "react"
import { buttonComponent as ButtonComponent } from "./buttonComponent"

class FooterComponent extends Component {
  state = {
    timeOfDay: undefined,
    buttonText: "Click me!",
    textValue: "",
    radioChecked: false
  }

  handleText = e => {
    this.setState({ textValue: e.target.value }, () =>
      console.table(this.state)
    )
  }

  handleButtonClick(text) {
    alert(text)
  }

  handleRadioChecked(event) {
    alert("asdfgh")
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

        <input
          type="text"
          text={this.state.textValue}
          onChange={this.handleText}
        />

        <input
          type="radio"
          value="myRadioBox"
          onChange={this.handleRadioChecked}
        />

        <ButtonComponent
          onClick={this.handleButtonClick.bind(
            this,
            "this button was clicked!"
          )}
          buttonText={this.state.buttonText}
        />
      </>
    )
  }

  componentDidMount() {
    // setTimeout(() => {
    //   var currentHour = new Date().getHours()
    //   var timeOfDay = currentHour >= 12 ? "afternoon!" : "morning!"
    //   this.setState({ timeOfDay })
    // }, 3000)
    console.log("i'm in componentDidMount")
  }

  componentDidUpdate() {
    console.log("i'm in componentDidUpdate")
  }
}

export default FooterComponent
