import React, { Component } from "react";

class HeaderComponent extends Component {
  state = {
    showParagraph: undefined,
    checkChecked: false,
    textBoxText: ""
  };

  handleClick = () => {
    this.setState({ showParagraph: !this.state.showParagraph });
  };

  handleCheckChecked(event) {
    alert("Check this out!");
  }

  handleTextBox = e => {
    this.setState({
      textBoxText: e.target.value
    });
  };

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
          <input type="checkbox" onChange={this.handleCheckChecked} />
        </div>
        <button id={"button"} onClick={this.handleClick}>
          Click Me!
        </button>
        {this.state.showParagraph ? <p>{this.props.paragraphText}</p> : null}
      </>
    );
  }
}

export default HeaderComponent;
