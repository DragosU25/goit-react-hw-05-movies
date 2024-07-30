import axios from 'axios';

const API_KEY = 'c0eccbee8238aa3ee19c6b09d37fc317';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchCastDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
