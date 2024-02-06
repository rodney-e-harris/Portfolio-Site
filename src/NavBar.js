import React from 'react';
import './NavBar.css'; // Import the CSS file

function NavBar() {
    return (
        <div className="navbar"> {/* Apply the 'navbar' class */}
          <a href="/">About</a>
          <a href="projects">Projects</a>
          <a href="works-in-progress">Works-In-Progress</a>
        </div>
    );
}

export default NavBar;
