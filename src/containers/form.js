import { useState } from "react"
import makeSearch from '../actions/makeSearch'

import { FormInput } from "../components/formInput"
import { SubmitButton } from "../components/submitButton"

function Form({ setResult }) {
  // initial state for user entered text
  const [enteredText, setText] = useState("")

  const submitForm = async (e) => {
    // prevent page reload on form submit
    e.preventDefault()

    // pass result up to App component
    setResult(await makeSearch(enteredText))
  }

  return (
    <div id="inputForm">
      <form onSubmit={(e) => submitForm(e)}>
        <FormInput setText={setText} />
        <SubmitButton />
      </form>
    </div>
  )
}

Form.defaultProps = {
  makeSearch
}

export default Form
