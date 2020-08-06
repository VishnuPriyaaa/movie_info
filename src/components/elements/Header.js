import React from 'react';
import {Link} from '@reach/router';
import {StyledHeader} from '../styles/StyledHeader';


const Header = () =>(
    <Link to="/">
       <StyledHeader>
             <label className="context">
                MovieHub
            </label>
        </StyledHeader>
    </Link>
        
    
)

export default Header;