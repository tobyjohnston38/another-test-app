import React from "react"

export const buttonComponent = props => {
  return <button onClick={props.onClick}>{props.buttonText}</button>
}
