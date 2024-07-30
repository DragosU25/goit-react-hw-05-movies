import React, { useEffect, useState } from 'react';
import { TrendingMovieList } from '../components/TrendingMovieList';
import { fetchTrendingMovies } from '../api';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Title>Trending Movies</Title>
      <TrendingMovieList movies={movies} />
    </Container>
  );
};

export default Home;
