import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>
        <h1>{props.match.params._id}</h1>
            Portfolio Item Number : {props.match.params._id}
        </div>
    )
}

export default  PortfolioItem;