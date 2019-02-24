export const initialState = {
  comment: "I am logging from the reducer",
  checkboxChecked: false,
  radiobuttonChecked: false,
  footerTextboxValue: "",
  headerTextboxValue: ""
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
    case "FOOTER_TEXTBOX_TEXT":
      console.log("executing the FOOTER_TEXTBOX_TEXT reducer")
      return {
        ...state,
        footerTextboxValue: action.payload
      }
    case "HEADER_TEXTBOX_TEXT":
      console.log("executing the HEADER_TEXTBOX_TEXT reducer")
      return {
        ...state,
        headerTextboxValue: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
