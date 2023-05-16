import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch the latest movies from your API and update state
    axios.get('/api/movies/latest').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">
          <img src="/logo.png" alt="shadow.tv" />
        </Link>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <button>Log In</button>
      </nav>
      <main>
        <h1>Latest Movies</h1>
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.posterUrl} alt={movie.title} />
              </Link>
              <div className="movie-details">
                <h2>{movie.title}</h2>
                <p>{movie.releaseDate}</p>
                <div className="rating">
                  {movie.rating} / 5 stars ({movie.ratingCount} ratings)
                </div>
                <p>{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
