import React from "react"
import ContentComponent from "./ContentComponent"
class ContentContainer extends React.Component {
  render() {
    return <ContentComponent applicationLogo={this.props.applicationLogo} />
  }
}

export default ContentContainer
