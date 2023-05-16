// Constants for API endpoint and movie genres
const API_ENDPOINT = 'https://api.shadow.tv';
const MOVIE_GENRES = ['Comedy', 'Horror', 'Drama', 'Documentary'];

// Function to fetch latest movies
async function fetchLatestMovies() {
  try {
    const response = await fetch(`${API_ENDPOINT}/movies/latest`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching latest movies:', error);
    return [];
  }
}

// Function to render movies to the DOM
function renderMovies(movies) {
  const moviesContainer = document.querySelector('#movies-container');
  moviesContainer.innerHTML = '';

  if (movies.length === 0) {
    moviesContainer.innerHTML = '<p>No movies found.</p>';
    return;
  }

  movies.forEach((movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const moviePoster = document.createElement('img');
    moviePoster.src = movie.posterUrl;
    moviePoster.alt = movie.title;
    moviePoster.classList.add('movie-poster');
    movieElement.appendChild(moviePoster);

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;
    movieTitle.classList.add('movie-title');
    movieElement.appendChild(movieTitle);

    const movieGenre = document.createElement('p');
    movieGenre.textContent = movie.genre;
    movieGenre.classList.add('movie-genre');
    movieElement.appendChild(movieGenre);

    const movieRating = document.createElement('p');
    movieRating.textContent = `Rating: ${movie.rating}/5`;
    movieRating.classList.add('movie-rating');
    movieElement.appendChild(movieRating);

    moviesContainer.appendChild(movieElement);
  });
}

// Function to fetch and render latest movies
async function loadLatestMovies() {
  const movies = await fetchLatestMovies();
  renderMovies(movies);
}

// Function to filter movies by genre
function filterMoviesByGenre(movies, genre) {
  return movies.filter((movie) => movie.genre === genre);
}

// Function to initialize the page
function initPage() {
  loadLatestMovies();

  const genreButtons = document.querySelectorAll('.genre-button');
  genreButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const genre = button.textContent;
      const movies = await fetchLatestMovies();
      const filteredMovies = filterMoviesByGenre(movies, genre);
      renderMovies(filteredMovies);
    });
  });
}

// Call initPage on page load
window.addEventListener('load', initPage);
