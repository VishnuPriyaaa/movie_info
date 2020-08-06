import { movieService } from '../services/movie.service';
import {MOVIES_URL, SEARCH_URL, API_URL, API_KEY} from '../components/helpers/config';

var credData
function fetchData () {
    return dispatch => {
        dispatch(request());
        movieService.getMovies()
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };  
}


function loadMoreData (...args) {
    let url;
    if(args.length > 1) {
        url = `${SEARCH_URL}${args[0]}&page=${args[1]+1}`;
    } else {
        url = `${MOVIES_URL}&page=${args[0] + 1}`;
    }
    return dispatch => {
        dispatch(request());
        movieService.getData(url)
            .then(
                data => dispatch(loadData(data)),
                error => dispatch(failure(error.toString()))
            );
    };
    
}


function request() { return { type: 'FETCH_MOVIES' } }
function success(data) { return { type: 'FETCH_MOVIES_SUCCESS', data } }
function failure(error) { return { type: 'FETCH_MOVIES_FAILURE', error } }
function searchData(data) { return { type: 'FETCH_SEARCH_MOVIES', data } }
function loadData(data) { return { type: 'LOAD_MORE_MOVIES', data } }
function detailsData(data) { return { type:'FETCH_MOVIE_DETAILS_SUCCESS',data}}
function setCredData(data) {
    credData = data;}

function fetchSearchData(val="",currentPage) {
    return dispatch => {
        const url = `${ val ? SEARCH_URL : MOVIES_URL}${val}&page=${currentPage || 1}`;
        movieService.getData(url)
        .then(
            data => dispatch(searchData(data)),
            error => dispatch(failure(error.toString()))
        );
    };

}

function sortByPopularity (currentPage) {
    const sortURL = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false
           & page=${currentPage || 1}`
    return dispatch => {
        dispatch(request());
        movieService.getData(sortURL)
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };
}

function sortByRating (currentPage) {
    
        const sortURL =`${API_URL}discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}&region=US&page=${currentPage ||1}&vote_count.gte=500`;
    return dispatch => {
        dispatch(request());
        movieService.getData(sortURL)
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };
}



function getMovieDetails (movieId) {
    const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const detailsURL = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    
    return async dispatch => {
        dispatch(request());
        await movieService.getData(detailsURL)
            .then(
                data => setCredData(data),
                error => dispatch(failure(error.toString()))
            );
        movieService.getData(url)
            .then(
                data => dispatch(detailsData({
                    ...data,
                    actors:credData.cast,
                    directors: credData.crew.filter(
                        member => member.job === 'Director'
                    )   
                })),
                error => dispatch(failure(error.toString()))
            );
    };  
}

export const movieActions = {
   fetchData,
   fetchSearchData,
   sortByPopularity,
   sortByRating,
   loadMoreData,
   getMovieDetails

};