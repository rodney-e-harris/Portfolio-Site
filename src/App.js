import './App.css';

function App() {
  return (
    <div className="App">

      {/* Temporary Navbar untill CSS added  */}
      <header>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="projects">Projects</a></li>
          <li><a href="works-in-progress">Works-In-Progress</a></li>
        </ul>
      </header>

    <h1>Rodney Harris</h1>

      {/* -- Picture */}
      <img src={require("./assets/ProfilePic.jpg")}>
      </img>

      {/* -- About Me  */}
      <p>
        This would be the section for an explanation of the lab and the broader application areas.
      </p>

      {/* -- The footer will contain sections where a user can find links to Github, relevant social medias and contact information */}
      <h3>Footer Placeholders</h3>

      <footer>
        <ul>
          <li><a href="https://github.com/rodney-e-harris" target="_blank" rel="noopener">Github</a></li>
          <li><a href="https://www.linkedin.com/in/rodney-harris-66840a199/" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="https://google.com" target="_blank" rel="noopener">Contact Information</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;