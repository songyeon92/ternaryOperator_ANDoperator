import { PromiseProvider } from "mongoose";
import React from "react";

const Input = (props) => {
    return <input type={props.type} placeholder={props.placeholder} />;
}

export default Input;
