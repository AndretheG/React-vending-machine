import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Chips() {
    const [bagsEaten, setBagsEaten] = useState(0)

    function eat() {
        setBagsEaten(bagsEaten + 1)
    }
    return (
        <div className="Chips">
            <h1>Chips: Crunchy, delicious, munch munch</h1>
            <b>Bags Eaten: {bagsEaten}</b>
            <br />
            <button onClick={eat}>Have a bag</button>
            <br />
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Chips