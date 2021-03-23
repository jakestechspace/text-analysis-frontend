import './App.scss'
import Form from './containers/form'
import { useState } from 'react'
import ResultContainer from './containers/resultContainer'

export default function App() {
  // initial state for api result
  const [result, setResult] = useState(null)

  return (
    <div className="container">
      {!result && <Form setResult={setResult} />}
      {result && (
        <>
          <span
            onClick={() => setResult(null)}
            className="clear-results"
          >
            (x) clear
          </span>
          <div className="result-holder">
            <ResultContainer result={result} />
          </div>
        </>
      )}
    </div>
  )
}