import React from "react"
import SidebarComponent from "./SidebarComponent"
import TimeComponent from "./TimeComponent"

//FUNCTIONAL COMPONENT

const ContentComponent = props => {
  return (
    <header className="App-header">
      <img src={props.applicationLogo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload geraoiufv.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
      <div className="Time">
        <TimeComponent />
      </div>
      <div id="sidebar">
        <SidebarComponent
          sidebarOption={
            <div className="navigation">
              <ul>
                <li>
                  <a href="thing.html">thing 1</a>
                </li>
                <li>
                  <a href="thing.html">thing 2</a>
                </li>
                <li>
                  <a href="thing.html">thing 3</a>
                </li>
                <li>
                  <a href="thing.html">thing 4</a>
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </header>
  )
}

export default ContentComponent
