import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { BackLink } from '../components/BackLink';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MovieImage = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 1rem 0;
`;

const Score = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Overview = styled.p`
  margin: 0.5rem 0;
`;

const Genre = styled.p`
  margin: 0.5rem 0;
`;

const AdditionalInfo = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const InfoItem = styled.li`
  a {
    display: block;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    img: '',
    title: '',
    score: '',
    overview: '',
    genre: '',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails({
          img: data.poster_path,
          title: data.title,
          score: data.vote_average,
          overview: data.overview,
          genre: data.genres.map(g => g.name).join(', '),
        });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieDetailsContainer>
        <Title>{movieDetails.title}</Title>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.img}`}
          alt={movieDetails.title}
        />
        <Score>Score: {movieDetails.score}</Score>
        <Overview>Overview: {movieDetails.overview}</Overview>
        <Genre>Genre: {movieDetails.genre}</Genre>
      </MovieDetailsContainer>

      <AdditionalInfo>
        <p>Additional information:</p>
        <InfoList>
          <InfoItem>
            <Link to="cast">Cast</Link>
          </InfoItem>
          <InfoItem>
            <Link to="reviews">Reviews</Link>
          </InfoItem>
        </InfoList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Container>
  );
};

export default MovieDetails;
