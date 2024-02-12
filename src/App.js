import './App.css';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">

    <NavBar /> {/* Render the NavBar component */}

    <h1>Rodney Harris</h1>

      {/* -- Picture */}
      <img src={require("./assets/ProfilePic.jpg")} className="profilePic">
      </img>

      {/* -- About Me  */}
      <p>
        Hello! My name is Rodney Harris. I am a software developer and ULL alumn having graduated in May 2023 with a B.S. in computer science.  
      </p>

      {/* -- The footer will contain sections where a user can find links to Github, relevant social medias and contact information */}
      <h3>Experience</h3>
      {/* -- Group Picture */}
      <img src={require("./assets/CAPE2022.jpg")} className="CAPEPicture">
      </img>

      <footer>
        <ul>
          <li>
            <a href="https://github.com/rodney-e-harris" target="_blank" rel="noopener">
            <img src={require("./assets/github.png")} className="github">
            </img>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/rodney-harris-66840a199/" target="_blank" rel="noopener">
            <img src={require("./assets/linkedin.png")} className="linkedin">
            </img>
            </a>
          </li>

        </ul>
      </footer>
    </div>
  );
}

export default App;