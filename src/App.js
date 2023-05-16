import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="logo">
            <img src="shadow-tv-logo.png" alt="Shadow TV Logo" />
            <h1>shadow<span>tv</span>.</h1>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>Series</li>
              <li>Account</li>
            </ul>
            <div className="search">
              <input type="text" placeholder="Search movies and tags" />
              <button type="submit">Search</button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Latest Movies</h2>
          {/* Movie list goes here */}
        </section>
        {/* Additional sections for movie categories, series, etc. */}
      </main>
      <footer>
        <div className="social">
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div className="discord">
          <a href={process.env.DISCORD_LINK}>Join our Discord server!</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
