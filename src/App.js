// import logo from "./logo.svg";
import logo from "./logonbg.png"
import mascot from "./mascot.png"
import fb from "./fblogo.png"
import ig from "./iglogo.png"
import gh from "./ghlogo.png"
import rock from "./dtrj.jpg"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="Nav-bar">
        <div class = "Nav-bar-logo">
          <img src = {mascot} id = "mascot" alt="Zotbotics mascot"></img>
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
        <a href="something" class="button1" id = "scroll-button">Learn More</a>
        <style class = "dotted-line"></style>
      </div>
    
      <div class="purpose">
        <ul class = "purpose-left">
          <li>
            <img src = {rock} id = "purpose-img1" alt="Zotbotics mascot"></img>
          </li>
          <li>
            <p class = "purpose-text">
              For the Fall 2020 quarter, Zotbotics will be hosting workshops regarding robotics.
              Each workshop will consist of informational slides/videos demonstrating
              how a certain part is integral to robotics and how it works. For workshops more focused
              on software, we will share Google Colabs where peopl can interact with the souce code.
            </p>
          </li>
          <li>
            <p class = "purpose-text">
              For the Winter 2021 quarter, Zotbotics members will be able to build their own
              fully functional robot that will be adaptable for future modifications. Teams will begin
              with a starter kit of parts and will be able to follow tutorials created bodyotbotics 
              for any programming, electrical designs, and mechanical designs necessary for the robot's 
              basic functions. From there, more advanced addons can be built into the robot, making
              the kit flexible and great for those getting into robotics, as well as 
              those already with some experience.
            </p>
          </li>
        </ul>

        <div class = "purpose-center">

        </div>

        <ul class = "purpose-right">
          <li>
            <h1>OUR PURPOSE</h1>
          </li>
          <li>
            <p class = "purpose-text">The purpose of Zotbotics is to provide a community where students interested in the field of robotics can work on fully functional robots and apply their skills in mechanical engineering, electornics, and computer science.</p>
          </li>
          <li>
            <p class = "purpose-text">Our members gain valuable experience that is applicable to education, research, and internships/careeers.</p>
          </li>
          <li>
            <img src = {rock} id = "purpose-img1" alt="Zotbotics mascot"></img>
          </li>
          <li>
            <img src = {rock} id = "purpose-img1" alt="Zotbotics mascot"></img>
          </li>
        </ul>
      </div>
      <div class = "purpose" id = "purpose-bottom">
        <img src = {mascot} id = "purpose-mascot" alt="Zotbotics mascot"></img>
      </div>

      <div class = "contact">
        <li id = "contact-list">
          <ul>
            <p class = "contact-text">For inquiries, email:</p>
            <p class = "contact-text">zotbotics@gmail.com</p>
          </ul>
          <ul>
            <img src = {mascot} id = "contact-mascot" alt="Zotbotics mascot"></img>
          </ul>
        </li>
      </div>

      <div id="footer">
        <ul id = "footer-ul">
          <li class = "footer-link">
            <a href="https://www.facebook.com/zotbotics">
              <img src={fb} alt = "facebook logo" height = "25em" width = "25em"></img>
            </a>
          </li>
          <li class = "footer-link">
            <a href="https://www.instagram.com/zotbotics">
              <img src={ig} alt = "instagram logo" height = "25em" width = "25em"></img>
            </a>
          </li>
          <li class = "footer-link">
            <a href="https://www.github.com/zotbotics">
              <img src={gh} alt = "github logo" height = "25em" width = "25em"></img>
            </a>
          </li>
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
