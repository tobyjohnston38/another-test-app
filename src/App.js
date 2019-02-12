import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import ContentContainer from "./ContentContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent paragraphText={"dgksfjbgdblfzbdfldohd"} />
        <ContentContainer applicationLogo={logo} />
        <FooterComponent footerText={this.props.footerText} />
      </div>
    )
  }
}

export default App
