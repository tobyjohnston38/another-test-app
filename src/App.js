import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent paragraphText={"dgksfjbgdblfzbdfldohd"} />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload geraoiufv.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div id="sidebar">
          <SidebarComponent sidebarOption={<a href="url">link text</a>} />
        </div>
        <FooterComponent footerText={this.props.footerText} />
      </div>
    );
  }
}

export default App;
