import { createDelayedPromise } from "./Bai1";
import { createNumberAfter1s } from "./Bai2";
import { rejectPromiseAfter1s } from "./Bai3";
// createDelayedPromise().then(message => {
//     console.log(message)
// })

// createNumberAfter1s().then(message =>{
//     console.log(message)
// })

rejectPromiseAfter1s().then(message =>{
    console.log(message)
}).catch(message =>{
    console.error(message)
})
