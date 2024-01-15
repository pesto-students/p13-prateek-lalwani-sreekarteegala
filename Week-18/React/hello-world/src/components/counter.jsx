// import React from 'react';

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1>Basic Counter:</h1>
            <div> counter - {count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}

export default Counter;