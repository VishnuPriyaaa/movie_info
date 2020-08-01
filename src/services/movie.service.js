import {MOVIES_URL} from '../components/helpers/config';

const getMovies = async () => 
  (await fetch(MOVIES_URL)).json()

 
const loadMoreData = async (url) => 
  (await fetch(url)).json()

const getMoviesByPopularity = async (url) => 
  (await fetch(url)).json()

const getMovieDetails = async (url) => 
  (await fetch(url)).json()

const getMoviesByRating = async (url) => 
  (await fetch(url)).json()

const getMoviesBySearch = async (url) => 
  (await fetch(url)).json()



// const getMoviesByPopularity = async (genreId, currentPage) =>
//   await axios.get(
//     `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false
//     &page=${currentPage || 1}${genreId ? `&with_genres=${genreId}` : ''}`,
//   );

// const getMoviesByRating = async (genreId, currentPage) =>
//   await axios.get(
//     `${MOVIEDB_BASE_URL}/discover/movie?sort_by=vote_average.desc&api_key=${MOVIEDB_API_KEY}&region=US&page=${currentPage ||
//       1}&vote_count.gte=500${genreId ? `&with_genres=${genreId}` : ''}`,
//   );

// const getMoviesByGenre = async (genreId, currentPage) =>
//   await axios.get(
//     `${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage ||
//       1}&with_genres=${genreId}`,
//   );




// const getNowPlayingMovies = async currentPage =>
//   await axios.get(
//     `${MOVIEDB_BASE_URL}/movie/now_playing?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${currentPage ||
//       1}`,
//   );

// const getGenres = async () =>
//   await axios.get(
//     `${MOVIEDB_BASE_URL}/genre/movie/list?api_key=${MOVIEDB_API_KEY}&language=en-US`,
//   );

// const getMovieDetails = async id =>
//   await axios.get(
//     `${MOVIEDB_BASE_URL}/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`,
//   );

export const movieService = {
  getMovies,
  getMoviesBySearch,
  getMoviesByPopularity,
  getMoviesByRating,
  loadMoreData,
  getMovieDetails
  // getMoviesByPopularity,
  // getMoviesByRating,
  // getMoviesByInput,
  // getMoviesByGenre,
  // getNowPlayingMovies,
  // getGenres,
  // getMovieDetails,
 
};