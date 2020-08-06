import {MOVIES_URL} from '../components/helpers/config';

const getMovies = async () => 
  (await fetch(MOVIES_URL)).json()



  const getData = async (url) => 
  (await fetch(url)).json()

export const movieService = {
  getMovies,
  getData
  
};