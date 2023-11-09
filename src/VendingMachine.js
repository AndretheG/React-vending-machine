import React from "react";
import { Link } from 'react-router-dom';

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <b>What would you like</b>
            <br />
            <Link to="/soda">Soda</Link>
            <Link to="/candy-bar">Candy bar</Link>
            <Link to="/chips">Chips</Link>
        </div>
    )
}

export default VendingMachine;