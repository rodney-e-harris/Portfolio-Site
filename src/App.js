import './App.css';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">

    <NavBar /> {/* Render the NavBar component */}

    <h1>Rodney Harris</h1>

      {/* -- Picture */}
      <img src={require("./assets/ProfilePic.jpg")}>
      </img>

      {/* -- About Me  */}
      <p>
        About me section
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