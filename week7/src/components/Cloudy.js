import React, {useState} from 'react';

function Cloudy () {
    const [days, setDays] = useState(0);

    return (
        <div>

            <h2>Cloudy Days: {days}</h2>
            <button onClick={() => setDays(days + 1)}>Cloudy Day</button>
            <button onClick={() => setDays(0)}>Reset Counter</button>

        </div>
    )
}
export default Cloudy;