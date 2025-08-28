"use strict";
function simulateTask1(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Task done in ${time}ms`), time);
    });
}
Promise.all([
    simulateTask1(1000),
    simulateTask1(2000),
    simulateTask1(1500)
]).then(results => {
    console.log("✅ All tasks completed:");
    console.log(results);
});
