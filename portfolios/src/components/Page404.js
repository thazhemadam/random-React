import React from 'react';
import {Link} from 'react-router-dom';
const Page404 = () => (
    <div>
        <h1>Oops</h1>
        404. Page not found.<br/>
        <Link to='/'>Go home.</Link>
    </div>
);

export default Page404;