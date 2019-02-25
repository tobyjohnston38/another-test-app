import React, { Component } from "react"
import {
  checkboxChecked,
  headerTextboxText,
  headerTextboxTextTwo
} from "./action"
import { connect } from "react-redux"

class HeaderComponent extends Component {
  state = {
    showParagraph: undefined,
    checkChecked: false,
    headerButtonHit: false,
    headerTextboxValue: "",
    headerTextboxValueTwo: ""
  }

  handleClick = () => {
    this.setState({ showParagraph: !this.state.showParagraph })
  }

  handleCheckChecked(event, action) {
    alert("Check this out!")
    action()
  }

  // handleText = () => {
  //   this.setState({  })
  // }

  render() {
    return (
      <>
        <div className="listBox">
          <input
            type="textbox"
            name="headerTextbox"
            value={this.props.headerTextboxValue}
            placeholder="Box One"
            onChange={this.props.handleHeaderInput}
          />
          <input
            type="textbox"
            name="otherHeaderTextbox"
            value={this.props.headerTextboxValueTwo}
            placeholder="Box Two"
            onChange={this.props.handleHeaderInputTwo}
          />
          <button id={"headerInputButton"} type="button">
            Submit
          </button>
          <h1>{`${this.props.headerTextboxValue} ${
            this.props.headerTextboxValueTwo
          }`}</h1>
        </div>
        <div className="checkThis">
          <input
            type="checkbox"
            onChange={event => this.props.checkboxChecked()}
            checked={this.props.checked}
          />
        </div>
        <button id={"headerButton"} type="button" onClick={this.handleClick}>
          Click Me!
        </button>
        {this.state.showParagraph ? <p>{this.props.paragraphText}</p> : null}
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkboxChecked: () => dispatch(checkboxChecked()),
    handleHeaderInput: event => dispatch(headerTextboxText(event.target.value)),
    handleHeaderInputTwo: event =>
      dispatch(headerTextboxTextTwo(event.target.value))
  }
}

const mapStateToProps = state => {
  return {
    checked: state.checkboxChecked,
    headerTextboxValue: state.headerTextboxValue,
    headerTextboxValueTwo: state.headerTextboxValueTwo
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)
