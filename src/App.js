import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";
import TimeComponent from "./TimeComponent";

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
          <div id="sidebar">
          <TimeComponent />
          <SidebarComponent sidebarOption={
            <ul class="navigation">
            <li><a href="thing.html">thing 1</a></li>
            <li><a href="thing.html">thing 2</a></li>
            <li><a href="thing.html">thing 3</a></li>
            <li><a href="thing.html">thing 4</a></li>
            </ul>} />
            </div>
        </header>
        <FooterComponent footerText={this.props.footerText} />
      </div>
    );
  }
}

export default App;
