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
    alert("Check this out!")
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
            name="headerTextbox"
            placeholder="Write Something Here!"
            onChange={this.handleTextBox}
          />
          <h1>{`${this.state.textBoxText}`}</h1>
        </div>
        <div className="checkThis">
          <input
            type="checkbox"
            onChange={event => this.props.checkboxChecked()}
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

const mapDispatchToProps = dispatch => {
  return {
    checkboxChecked: () => dispatch(checkboxChecked())
  }
}

const mapStateToProps = state => {
  return {
    checked: state.checkboxChecked
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)
