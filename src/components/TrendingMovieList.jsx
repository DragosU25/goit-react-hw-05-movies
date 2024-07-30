import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 1rem;
  justify-content: center;
`;

const MovieItem = styled.li`
  position: relative;
  width: 200px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    display: block;
    padding-top: 150%; /* Maintain aspect ratio */
  }
`;

const MovieTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const TrendingMovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
          }}
        >
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </MovieItem>
      ))}
    </MovieList>
  );
};
