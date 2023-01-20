const apiKey = '4db6a1af7622fc599f807c5f3f105b33';
const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;

    // Obtener el contenedor de películas
    const movieList = document.getElementById('movie-list');

    // Insertar las películas en el contenedor
    movies.forEach(movie => {
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
      <p> Puntuación: ${movie.vote_average}</p>
      `;
      movieList.appendChild(movieEl);
    });
  })
  .catch(error => console.log(error));
