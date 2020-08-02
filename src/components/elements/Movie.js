import React, {useCallback,useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Navigation from './Navigation';
import Grid from './Grid';
import Spinner from './Spinner';
import { movieActions } from '../../actions/movie_action';

const Movie = (queryParams) => {
  const state = useSelector(state => state.movieDetails);
  const movieId = queryParams.match.params.id
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(movieActions.getMovieDetails(movieId))
  }, [movieId]);

 
  if(state.error) return <div>Something Went wrong ....</div>
  
  if(Object.keys(state.details).length === 0 ) return <Spinner />
  return (
    <>
    
    <Navigation movie={state.details.original_title}/>
     <MovieInfo movie={state.details}/>
    <MovieInfoBar 
      time={state.details.runtime}
      budget={state.details.budget}
      revenue={state.details.revenue}/>
    <Grid header="Actors">
        {state.details.actors.map( actor => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
    </Grid>
     {state.loading && <Spinner />}
    
    </>)
}

export default Movie;