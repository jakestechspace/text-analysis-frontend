import './App.css'
import Form from './containers/form'
import { useState } from 'react'
import ResultContainer from './containers/resultContainer'

export default function App(props) {
  // initial state for result which comes back from analytics api
  const [result, setResult] = useState(null)
  console.log('result', result)

  return (
    <div className="App">
      <header className="App-header">
        <Form setResult={setResult} />
        {result && <ResultContainer result={result} />}
      </header>
    </div>
  )
}