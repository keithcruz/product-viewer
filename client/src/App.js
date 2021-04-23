// import logo from "./logo.svg";
import "./App.css";
import { Table } from "./Table/Table";

function App() {
  async function getApi(event) {
    event.preventDefault();
    const result = await fetch("/api");
    const text = await result.text();
    console.log(text);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Table />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={getApi}
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
