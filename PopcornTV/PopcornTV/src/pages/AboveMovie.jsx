import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs';

import MovieCard from '../componenets/MovieCard';

import './Movie.css';

const moviesURL = 'https://api.themoviedb.org/3/movie/'
const apiKey = 'api_key=cacfbbeb12e4f2b6ce3542f99039726f'


const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(`${moviesURL}${id}?${apiKey}&language=en-US`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getMovie();
  }, [id]);

  const formatCurrency = (number) => {

    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  
{/*
  const getMovie = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie`);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {

    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

*/}

  return (
    <div className="movie-page">
      {movie && (
        <>
          
          <div className="movie-card-items">
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
          </div>

          <div className='movie-info'>
            <div className="info">
              <h3>
                <BsWallet2 />
                Budget:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>

            <div className="info">
              <h3>
                <BsGraphUp />
                Invoicing:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>

            <div className="info">
              <h3>
                <BsHourglassSplit />
                Duration:
              </h3>
              <p>{movie.runtime} minutes</p>
            </div>

            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill />
                Description:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
