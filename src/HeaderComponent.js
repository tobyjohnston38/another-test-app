import React, { Component } from 'react'

class HeaderComponent extends Component {
 state = {
  showParagraph: undefined
 }

 handleClick = () => {
  this.setState({ showParagraph: !this.state.showParagraph  })
 }

 render() {
 return (
  <>
   <button id={'button'}  onClick={this.handleClick}>Click Me!</button>
   {this.state.showParagraph ? <p>{this.props.paragraphText}</p> : null}
  </>
  )
 }
}

export default HeaderComponent