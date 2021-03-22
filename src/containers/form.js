import { useState } from "react"
import makeSearch from '../actions/makeSearch';

import { FormInput } from "../components/formInput"
import { SubmitButton } from "../components/submitButton"

function Form() {
  // initial state for user entered text
  const [enteredText, setText] = useState("");

  // initial state for result which comes back from analytics api
  const [result, setResult] = useState(null);

  const submitForm = async (e) => {
    // prevent page reload on form submit
    e.preventDefault()

    // await makeSearch promise and save result in variable
    const result = await makeSearch(enteredText);
    console.log(result);
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

export default Form;
