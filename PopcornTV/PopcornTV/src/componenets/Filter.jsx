import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const moviesURL = 'https://api.themoviedb.org/3/movie/'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNmYmJlYjEyZTRmMmI2Y2UzNTQyZjk5MDM5NzI2ZiIsInN1YiI6IjY0ODI5MmU2ZTM3NWMwMDBjNTI2OTJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKgiWauBmB38kAPsoxcttC5RHedaNfO1TrzuX9uSESE'
  }
};

const Filter = () => {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    rating: '',
  });

  useEffect(() => {
    // Fetch films data from the API
    fetch(`${moviesURL}`, options)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setFilteredFilms(data.results);
        // Extract genres, years, and ratings from films data
        const uniqueGenres = [...new Set(data.results.map((movie) => movie.genre))];
        const uniqueYears = [...new Set(data.results.map((movie) => movie.release_date))];
        const uniqueRatings = [...new Set(data.results.map((movie) => movie.vote_average))];
        setGenres(uniqueGenres);
        setYears(uniqueYears);
        setRatings(uniqueRatings);
      })
      .catch((error) => console.error('Error fetching films:', error));
  }, []);

  useEffect(() => {
    // Apply filters whenever they change
    const { genre, year, rating } = filters;
    const filteredData = films.filter(
      (movie) =>
        (genre === '' || movie.genre === genre) &&
        (year === '' || movie.release_date === year) &&
        (rating === '' || movie.vote_average === rating)
    );
    setFilteredFilms(filteredData);
  }, [filters, films]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <h1>Film Search</h1>
      <div>
        <label htmlFor="genreFilter">Genre:</label>
        <select name="genre" id="genreFilter" onChange={handleFilterChange}>
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="yearFilter">Year:</label>
        <select name="year" id="yearFilter" onChange={handleFilterChange}>
          <option value="">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ratingFilter">Rating:</label>
        <select name="rating" id="ratingFilter" onChange={handleFilterChange}>
          <option value="">All</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>

      <h2>Results:</h2>
      {filteredFilms.length > 0 ? (
        <ul>
          {filteredFilms.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>No films match the selected filters.</p>
      )}
    </div>
  );
};

export default Filter;
