import React from "react";
import Login from "./Login";

var isRegistered = true;
const today = new Date();
const hours = today.getHours();

const App = () => {
    return ( 
    <div className="container">
        { (hours > 12) && <h1>Good afternnon ~!</h1> }
        { (isRegistered === true) ? <h1>Please Login to use our service.</h1> : null  }
        <Login isRegistered={isRegistered} />
    </div>
    );
}

export default App;
