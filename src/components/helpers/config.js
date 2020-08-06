
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const SEARCH_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const MOVIES_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=`;
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export { API_URL, API_KEY, 
    SEARCH_URL,MOVIES_URL,
    IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
