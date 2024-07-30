import React, { useState, useEffect } from 'react';
import { fetchCastDetails } from '../api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
`;

const CastImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
`;

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchCastDetails(movieId);
        setCast(data.cast || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <CastList>
      {cast.map(member => (
        <CastItem key={member.id}>
          <CastImage
            src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
            alt={member.name}
          />
          <p>Name: {member.name}</p>
          <p>Character: {member.character}</p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
