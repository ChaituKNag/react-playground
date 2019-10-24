import React from 'react';

function Greet({message}) {
    return <h1>{message || "Hello World"}</h1>;
}

function hello() {
    console.log("Hello World of rollup");
}

export {
    hello,
    Greet
}