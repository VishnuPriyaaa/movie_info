import * as types from '../components/helpers/helpers';

const moviesInitialState = {
    movies: [],
    loading: false,
    error: null
  };


  export const movies = (state = moviesInitialState, action) => {
    switch (action.type) {
      case types.FETCH_MOVIES:
        const t = {
          ...state,
          loading: true
        }
        return {
          ...state,
          loading: true
        };
  
      case types.FETCH_MOVIES_SUCCESS:
        return {
          error: null,
          loading: false,
          currentPage: action.data.page,
          total_pages: action.data.total_pages,
          movies:action.data.results
         
        };

        
  
      case types.FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.data,
        };
  
      case types.FETCH_SEARCH_MOVIES:
        return {
          error: null,
          loading: false,
          currentPage: action.data.page,
          total_pages: action.data.total_pages,
          movies:action.data.results
        };
        case types.LOAD_MORE_MOVIES:
          const dat = {
            error: null,
            loading: false,
            currentPage: action.data.page,
            total_pages: action.data.total_pages,
            movies:[...state.movies,...action.data.results]
          }

        return {
          error: null,
          loading: false,
          currentPage: action.data.page,
          total_pages: action.data.total_pages,
          movies:[...state.movies,...action.data.results]
         
        };
      default:
        return state;
    }
  };
  
  const movieDetailsinitialState = {
    details: {},
    loading: false,
    error: null,
  };
  
  export const movieDetails = (state = movieDetailsinitialState, action) => {
    switch (action.type) {
      case types.FETCH_MOVIE_DETAILS:
        return {
          ...state,
          loading: true,
        };
  
      case types.FETCH_MOVIE_DETAILS_SUCCESS:
        const da = {
          error: null,
          loading: false,
          movies:action.data
          
        }
        return {
          error: null,
          loading: false,
          details: action.data
        };
  
      case types.FETCH_MOVIE_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  }