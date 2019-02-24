import React, { Component } from "react";

class SidebarComponent extends Component {
  state = {
    showSidebar: undefined
  };

  handleClick = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    return (
      <>
        <button id={"button-home"} onClick={this.handleClick} />
        {this.state.showSidebar ? <p>{this.props.sidebarOption}</p> : null}
      </>
    );
  }
}

export default SidebarComponent;
