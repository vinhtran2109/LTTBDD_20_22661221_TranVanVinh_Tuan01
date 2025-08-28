"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNumberAfter1s = void 0;
const createNumberAfter1s = () => {
    return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            setTimeout(() => {
                resolve(10);
            }, 1000);
        }
        else {
            reject("Failed ");
        }
    });
};
exports.createNumberAfter1s = createNumberAfter1s;
