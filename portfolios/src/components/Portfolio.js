import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>Portfolio Work</h1>
    
        Check out some items in portfolio.<br />
        <Link to='/portfolio/1'> Item 1  </Link>
        <Link to='/portfolio/2'> Item 2  </Link>
    </div>
);

export default Portfolio;