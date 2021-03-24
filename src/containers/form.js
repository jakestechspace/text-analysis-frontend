import { useState } from "react"
import makeSearch from '../actions/makeSearch'

import { FormInput } from "../components/formInput"
import { SubmitButton } from "../components/submitButton"

function Form({ analyzeText, setResult }) {
  // initial state for user entered text
  const [enteredText, setText] = useState("")

  // initial state for loading
  const [isLoading, setLoading] = useState(false)

  const submitForm = async (e) => {
    // prevent page reload on form submit
    e.preventDefault()

    // pass result up to App component
    setResult(await analyzeText(enteredText, setLoading))
  }

  return (
    <div id="inputForm">
      <span>{isLoading ? "Loading..." : "Enter some text"}</span>
      <form onSubmit={(e) => submitForm(e)}>
        <FormInput setText={setText} />
        <SubmitButton disabled={isLoading} />
      </form>
    </div>
  )
}

Form.defaultProps = {
  analyzeText: makeSearch
}

export default Form
