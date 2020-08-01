import React from 'react';
import {Link} from 'react-router-dom';
import {StyledMovieThumb} from '../styles/StyledMovieThumb';


const MovieThumb = React.memo(({image, movieId, clickable}) => (
  <StyledMovieThumb>
      {clickable?(
          <Link to={`/${movieId}`}>
              <img className="clickable" src={image} alt="moviethumb" />
          </Link>
      ):(
          <img src={image} alt="moviethumb" />
      )}
  </StyledMovieThumb>
));

export default MovieThumb