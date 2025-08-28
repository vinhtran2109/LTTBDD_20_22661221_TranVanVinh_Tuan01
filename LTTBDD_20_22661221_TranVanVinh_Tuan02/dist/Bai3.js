"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectPromiseAfter1s = void 0;
const rejectPromiseAfter1s = () => {
    return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            setTimeout(() => {
                resolve("Success");
            }, 1000);
        }
        else {
            setTimeout(() => {
                reject("Something went wrong");
            }, 1000);
        }
    });
};
exports.rejectPromiseAfter1s = rejectPromiseAfter1s;
