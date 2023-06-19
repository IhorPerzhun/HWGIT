import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import MovieCard from './../componenets/MovieCard';

import './MoviesGrid.css';

const moviesURL = 'https://api.themoviedb.org/3/movie/'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNmYmJlYjEyZTRmMmI2Y2UzNTQyZjk5MDM5NzI2ZiIsInN1YiI6IjY0ODI5MmU2ZTM3NWMwMDBjNTI2OTJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKgiWauBmB38kAPsoxcttC5RHedaNfO1TrzuX9uSESE'
  }
};



const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () =>{
      
      const res = await fetch(`${moviesURL}top_rated?language=en-US&page=1`, options);
      const data = await res.json();
      console.log(data.results)

      setTopMovies(data.results);
      
    };


    getTopRatedMovies();
  }, []);


  return (
    <div className="container">
      <h2 className="title">Best movies:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && (
          <div className="loader">
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="light" />
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
