import React from "react";
import { Link } from 'react-router-dom';

function Soda() {
    return (
        <div className="Soda">
            <h1>Fizzpop products</h1>
            <b>All the fizz without the buzz</b>
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Soda;