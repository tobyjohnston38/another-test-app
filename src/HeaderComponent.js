import React, { Component } from "react"
import { checkboxChecked } from "./action"
import { connect } from "react-redux"

class HeaderComponent extends Component {
  state = {
    showParagraph: undefined,
    checkChecked: false,
    textBoxText: ""
  }

  handleClick = () => {
    this.setState({ showParagraph: !this.state.showParagraph })
  }

  handleCheckChecked(event, action) {
    // alert("Check this out!")
    action()
  }

  handleTextBox = e => {
    this.setState({
      textBoxText: e.target.value
    })
  }

  render() {
    return (
      <>
        <div className="listBox">
          <input
            type="textbox"
            name="textbox"
            placeholder="Write Something Here!"
            onChange={this.handleTextBox}
          />
          <h1>{`${this.state.textBoxText}`}</h1>
        </div>
        <div className="checkThis">
          <input
            type="checkbox"
            onChange={event =>
              this.handleCheckChecked(event, this.props.onCheckboxChecked)
            }
            checked={this.props.checked}
          />
        </div>
        <button id={"button"} onClick={this.handleClick}>
          Click Me!
        </button>
        {this.state.showParagraph ? <p>{this.props.paragraphText}</p> : null}
      </>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    onCheckboxChecked: () => checkboxChecked()
  }
}

const mapStateToProps = state => {
  console.log(`received the checked state ${state.checked}`)
  return {
    checked: state.checked
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)
