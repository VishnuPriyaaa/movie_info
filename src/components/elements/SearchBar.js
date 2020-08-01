import React, {useState, useRef, useEffect} from 'react';
import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar';
import FontAwesome from 'react-fontawesome';
const SearchBar = ({ callback }) => {
 
    let inputValue;
    const [state,setState] = useState( '');
    const timeOut = useRef(null);

   

    const doSearch = event => {
        const value  = event.target.value;
        setState(value);

        timeOut.current = setTimeout(()=> {
            callback(value);
        },500);
    }

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x" />
                <input 
                type="text"
                placeholder="Search"
                onChange = {doSearch}
                id="search"
                value = {state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}

export default SearchBar