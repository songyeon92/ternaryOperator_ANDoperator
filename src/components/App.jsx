import React, { useState } from "react";
import Login from "./Login";

var isRegistered = true;
const today = new Date();
const hours = today.getHours();



const App = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
    return setCount(count + 1);
    }

    const decrease = () => {
        return setCount(count - 1);
    }

    return ( 
    <div className="container">
        { (hours > 12) && <h1>Good afternnon ~!</h1> }
        { (isRegistered === true) ? <h1>Please Login to use our service.</h1> : null  }
        <Login isRegistered={isRegistered} />
        <h1>Counting</h1>
        <h1>{count}</h1>
        <button onClick={ increase }>+</button>
        <button onClick={ decrease }>-</button>
    </div>
    );
}

export default App;
