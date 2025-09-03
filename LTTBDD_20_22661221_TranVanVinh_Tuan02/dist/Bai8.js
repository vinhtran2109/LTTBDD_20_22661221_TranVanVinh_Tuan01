"use strict";
// Bai 8: Promise chain - square, double, add 5
const square = (n) => Promise.resolve(n * n);
const double = (n) => Promise.resolve(n * 2);
const addFive = (n) => Promise.resolve(n + 5);
square(2)
    .then(double)
    .then(addFive)
    .then(result => console.log('Result:', result));
