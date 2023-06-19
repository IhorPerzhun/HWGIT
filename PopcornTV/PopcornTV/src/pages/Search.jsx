import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import MovieCard from './../componenets/MovieCard';

import './MoviesGrid.css';

const searchURL = 'https://api.themoviedb.org/3/search/movie?';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNmYmJlYjEyZTRmMmI2Y2UzNTQyZjk5MDM5NzI2ZiIsInN1YiI6IjY0ODI5MmU2ZTM3NWMwMDBjNTI2OTJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKgiWauBmB38kAPsoxcttC5RHedaNfO1TrzuX9uSESE'
  }
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  useEffect(() => {
    const getSearchedMovies = async () => {
      
      const res = await fetch(`${searchURL}&query=${query}&language=en-US&page=1&include_adult=false`, options);
      const data = await res.json();
      setMovies(data.results);
      
    }

    getSearchedMovies();
  }, [query]);

  

  
  return (
    <div className="container">
      <h2 className="title">
      Results for: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && (
          <div className="loader">
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="light" />
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
