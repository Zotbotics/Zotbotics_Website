// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="Nav-bar">
        <div class="Nav-bar-links">
          <a class="Nav-bar-text" href="/Zotbotics_Website">Home</a>
          <a class="Nav-bar-text" href="/about">About</a>
          <a class="Nav-bar-text" href="/interested-students">Interested Students</a>
          <a class="Nav-bar-text" href="/tutorials">Tutorials</a>
          <a class="Nav-bar-text" href="/team5">Team 5</a>
        </div>
      </div>
      <div class="home-body">
        <p>
          <h1>Zotbotics</h1>
        </p>
      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
