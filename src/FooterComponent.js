import React, { Component } from "react"
import { buttonComponent as ButtonComponent } from "./buttonComponent"
import { radiobuttonChecked, footerTextboxText } from "./action"
import { connect } from "react-redux"

class FooterComponent extends Component {
  state = {
    timeOfDay: undefined,
    buttonText: "Click me!",
    textValue: "",
    radioChecked: false
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
          type="textbox"
          name="footerTextBox"
          value={this.props.textboxValue}
          onChange={this.props.handleInput}
        />

        <input
          type="radio"
          value="myRadioBox"
          onChange={this.props.radiobuttonChecked}
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
    setTimeout(() => {
      var currentHour = new Date().getHours()
      var timeOfDay = currentHour >= 12 ? "afternoon!" : "morning!"
      this.setState({ timeOfDay })
    }, 3000)
    console.log("i'm in componentDidMount")
  }

  componentDidUpdate() {
    console.log("i'm in componentDidUpdate")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    radiobuttonChecked: () => dispatch(radiobuttonChecked()),
    handleInput: event => dispatch(footerTextboxText(event.target.value))
  }
}

const mapStateToProps = state => {
  return {
    checked: state.radiobuttonChecked,
    textboxValue: state.textboxValue
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent)
