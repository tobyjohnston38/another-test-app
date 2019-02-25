import React from "react"
import SidebarComponent from "./SidebarComponent"
import TimeComponent from "./TimeComponent"

const ContentComponent = props => {
  return (
    <header className="App-header">
      <img src={props.applicationLogo} className="App-logo" alt="logo" />
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
