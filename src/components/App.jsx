import React from "react";
import Login from "./Login";

var isLoggined = true;
const today = new Date();
const hours = today.getHours();

const App = () => {
    return ( 
    <div className="container">
        { (hours > 12) && <h1>Good afternnon ~!</h1> }
        { (isLoggined === true) ? <h1>How may I help you?</h1> : <Login /> }
    </div>
    );
}

export default App;
