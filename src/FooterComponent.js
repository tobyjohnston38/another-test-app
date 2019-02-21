import React, { Component } from "react"
import { buttonComponent as ButtonComponent } from "./buttonComponent"
import { radiobuttonChecked } from "./action"
import { connect } from "react-redux"

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
          onChange={event => this.props.radiobuttonChecked()}
          checked={this.props.checked}
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

const radioDispatchToProps = dispatch => {
  return {
    radiobuttonChecked: () => dispatch(radiobuttonChecked())
  }
}

const mapRadioStateToProps = state => {
  console.log(`got state for radiobutton ${state.checked}`)
  return {
    checked: state.checked
  }
}

export default connect(
  mapRadioStateToProps,
  radioDispatchToProps
)(FooterComponent)
