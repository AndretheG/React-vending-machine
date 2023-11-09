import React from "react";
import { Link } from 'react-router-dom';

function CandyBar() {
    return (
        <div className="CandyBar">
            <h1>Straight from Candy Land</h1>
            <b>Out of stock</b>
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default CandyBar;