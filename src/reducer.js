export const initialState = {
  comment: "I am logging from the reducer",
  checkboxChecked: false,
  radiobuttonChecked: false,
  textboxValue: ""
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKBOX_CHECKED":
      console.log("executing the CHECKBOX_CHECKED reducer")
      return {
        ...state,
        checkboxChecked: !state.checkboxChecked
      }
    case "RADIOBUTTON_CHECKED":
      console.log("executing the RADIOBUTTON_CHECKED reducer")
      return {
        ...state,
        radiobuttonChecked: !state.radiobuttonChecked
      }
    case "TEXTBOX_TEXT":
      console.log("executing the TEXTBOX_TEXT reducer")
      return {
        ...state,
        textboxValue: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
