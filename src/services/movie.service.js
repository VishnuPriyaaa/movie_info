import {MOVIES_URL} from '../components/helpers/config';

const getMovies = async () => 
  (await fetch(MOVIES_URL)).json()



  const getData = async (url) => 
  (await fetch(url)).json()


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





export const movieService = {
  getMovies,
  getMoviesBySearch,
  getMoviesByPopularity,
  getMoviesByRating,
  loadMoreData,
  getMovieDetails,
  getData
  
};