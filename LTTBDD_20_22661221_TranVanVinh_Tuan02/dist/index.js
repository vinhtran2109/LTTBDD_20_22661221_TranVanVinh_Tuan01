"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai3_1 = require("./Bai3");
// createDelayedPromise().then(message => {
//     console.log(message)
// })
// createNumberAfter1s().then(message =>{
//     console.log(message)
// })
(0, Bai3_1.rejectPromiseAfter1s)().then(message => {
    console.log(message);
}).catch(message => {
    console.error(message);
});
