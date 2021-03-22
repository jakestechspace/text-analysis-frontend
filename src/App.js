import logo from './logo.svg';
import './App.css';
import makeSearch from './actions/makeSearch';
import Form from './containers/form';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => props.makeSearch("yayyy you are the best")}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Form />
      </header>
    </div>
  );
}

App.defaultProps = {
  makeSearch
}

export default App;
