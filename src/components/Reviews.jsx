import React, { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ReviewItem = styled.li`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Author = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const Content = styled.p`
  margin: 0;
`;

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ReviewsList>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ReviewItem key={review.id}>
            <Author>Author: {review.author}</Author>
            <Content>{review.content}</Content>
          </ReviewItem>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </ReviewsList>
  );
};

export default Reviews;
