import './Projects.css';
import NavBar from './NavBar.js';

function Projects() {
  return (
    <div className="App">

    <NavBar /> {/* Render the NavBar component */}

    <h1>Projects</h1>

      {/* -- About Me  */}
      <p>
        About me section
      </p>

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

export default Projects;