import React from 'react';
import {RattingButton,
    FiltersContainer,
    FilterButtonsContainer,
    PopularityButton} from '../styles/StyledSortBtn';


const Sorting = ({callback}) => {

    const sortByRating = () => {
        callback("rating");
    }

    const sortByPopularity = ({}) => {
        callback("popularity");
    }
    
    return (
        <FiltersContainer>
        <FilterButtonsContainer>
          {/* <StyledReactSelect
            className="react-select-container"
            classNamePrefix="react-select"
            value={chosenGenre || null}
            isDisabled={false}
            isLoading={false}
            isClearable
            name="Genre"
            onChange={handleGenreChange}
            options={genresFormatedForSelect}
            placeholder="Select genre..."
          /> */}
          <RattingButton  onClick = {sortByRating} type="button">
            Rating
          </RattingButton>
          <PopularityButton
            onClick={sortByPopularity}
            type="button"
          >
            Popularity
          </PopularityButton>
        </FilterButtonsContainer>
  
        
      </FiltersContainer>
    )
}
export default Sorting;