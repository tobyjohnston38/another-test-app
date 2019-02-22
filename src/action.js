export const checkboxChecked = () => ({
  type: "CHECKBOX_CHECKED",
  payload: "blah"
})

export const radiobuttonChecked = () => ({
  type: "RADIOBUTTON_CHECKED",
  payload: "lalalalala"
})

export const footerTextboxText = footerTextBoxText => ({
  type: "FOOTER_TEXTBOX_TEXT",
  payload: footerTextBoxText
})

export const headerTextboxText = headerTextboxText => ({
  type: "HEADER_TEXTBOX_TEXT",
  payload: headerTextboxText
})
