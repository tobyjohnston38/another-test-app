import React, { Component } from "react";

class HeaderComponent extends Component {
  state = {
    showParagraph: undefined,
    checkChecked: false
  };

  handleClick = () => {
    this.setState({ showParagraph: !this.state.showParagraph });
  };

  handleCheckChecked(event) {
    alert("Check this out!");
  }

  render() {
    return (
      <>
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
