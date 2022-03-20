// import logo from "./logo.svg";
import logo from "./logonbg.png"
import mascot from "./mascot.png"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="Nav-bar">
        <div class = "Nav-bar-logo">
          <img src = {mascot} id = "mascot" alt="Zotbotics mascot"></img>
          {/* <p>Zotbotics</p> */}
        </div>
        <div class="Nav-bar-links">
          <a class="Nav-bar-text" href="/Zotbotics_Website">Home</a>
          <a class="Nav-bar-text" href="/about">About</a>
          <a class="Nav-bar-text" href="/interested-students">Interested Students</a>
          <a class="Nav-bar-text" href="/tutorials">Tutorials</a>
        </div>
      </div>
      <div class="home-body">
        <img src={logo} alt="Zotbotics logo"></img>
      </div>
      <div class="home-body" id = "intro">
        <h1 id = "intro-header">Zotbotics is a project based robotics club at UCI, open to all majors and experience levels.</h1>
          <p class = "home-body-text" id = "intro-sub">We are a club dedicated to exploring the field of robotics as well as building interesting and creative projects.</p>
        <a href="something" class="button1">Learn More</a>
      </div>
      <div class="home-body" id="interested">
        <h1>Interested Students</h1>
        <p class = "home-body-text">For the Fall 2020 quarter, Zotbotics will be hosting workshops regarding robotics. Each workshop will consist of informational slides/videos demonstrating how a certain part is integral to robotics and how it works. For workshops more focused on software, we will also share Google Colabs where people can interact with the source code.</p>
        <p class = "home-body-text">Interested? Please fill out this form and subscribe to our newsletter.</p>
      </div>
      <div class="home-body" id ="tutorials">
        <h1>Tutorials</h1>
        <p class = "home-body-text">If you are interested in checking out what we'll be working on, please check out the following resources!</p>
      </div>
      <div class="footer">
      <ul>
        <li class = "footer-link">instagram link</li>
        <li class = "footer-link">other link</li>
        <li class = "footer-link">newsletter signup link</li>
      </ul>
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
