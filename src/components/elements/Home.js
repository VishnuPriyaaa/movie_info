import React, {useState, useEffect} from 'react';
import {IMAGE_BASE_URL,POSTER_SIZE} from '../helpers/config';
import Grid from './Grid';
import LoadMoreBtn from './LoadMoreBtn';
import MovieThumb from './MovieThumb';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Sorting from './Rating';

import { movieActions } from '../../actions/movie_action';

import { useSelector, useDispatch } from 'react-redux';

import NoImage from '../images/no_image.jpg';


const Home = () => {

  const state = useSelector(state => state.movies); //this hook gives us redux store state
  const dispatch = useDispatch(); //this hook gives us dispatch method
  const [searchTerm ,setSearchTerm] = useState('');
  
  useEffect(() => {
    dispatch(movieActions.fetchData()) 
   }, []);


  const onSearch = val => {
    setSearchTerm(val)
    dispatch(movieActions.fetchSearchData(val,state.currentPage))
  }

  const onSort = val => {
       if(val.localeCompare("rating")){
         dispatch(movieActions.sortByRating());
       } else {
         dispatch(movieActions.sortByPopularity());
       }
  }

  const onLoadMore = () => {
      if(searchTerm){
        dispatch(movieActions.loadMoreData(searchTerm,state.currentPage));
      } else {
        dispatch(movieActions.loadMoreData(state.currentPage))
      }
  }

  return (
    <>
      <SearchBar callback={onSearch}/>
      <Sorting callback={onSort}/>
      <Grid header={searchTerm? 'searchResult' : 'PopularMovies'}>
         {state.movies.map(movie => (
           <MovieThumb
            key={movie.id}
            clickable
            image = {
               movie.poster_path
               ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
               : NoImage
           }
           movieId={movie.id}
           movieName = {movie.original_title}
          /> 
        
       ))}
      </Grid>
      {state.loading && <Spinner />}
      {state.currentPage < state.total_pages && !state.loading &&(
       <LoadMoreBtn  text="Load More" callback={onLoadMore}/>
      )}
    </>
  )
}

export default Home;