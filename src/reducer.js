export const initialState = {
  comment: "I am logging from the reducer",
  checked: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKBOX_CHECKED":
      console.log("executing the CHECKBOX_CHECKED reducer")
      return {
        checked: !state.checked
      }
    case "RADIOBUTTON_CHECKED":
      console.log("executing the RADIOBUTTON_CHECKED reducer")
      return {
        checked: !state.checked
      }
    default:
      return state
  }
}

export default rootReducer
