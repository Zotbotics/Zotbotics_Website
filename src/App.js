import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="Nav-bar">
        <a class="active" href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Welcome to the new Zotbotics website!</h1>
          <p>Hellow</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
