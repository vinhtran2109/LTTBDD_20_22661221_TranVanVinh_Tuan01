"use strict";
// Bai 9: Promise reads array after 1s and filters even numbers
const arr = [1, 2, 3, 4, 5, 6];
const filterEven = (arr) => arr.filter(x => x % 2 === 0);
new Promise((resolve) => {
    setTimeout(() => resolve(arr), 1000);
})
    .then(filterEven)
    .then(evens => console.log('Even numbers:', evens));
