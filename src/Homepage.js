import React from 'react';
import{Link} from 'react-router-dom';

function Homepage(){
    return(
        <div>
            <h3>Home Component</h3>
            <Link to="/">Homepage</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Homepage;