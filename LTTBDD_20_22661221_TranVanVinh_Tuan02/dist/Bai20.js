"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUserWithTimeout(id, timeout = 2000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error('Timeout!')), timeout);
        setTimeout(() => {
            clearTimeout(timer);
            resolve({ id, name: `User${id}` });
        }, Math.random() * 3000);
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield fetchUserWithTimeout(1);
        console.log('Fetched user:', user);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Error:', err.message);
        }
        else {
            console.error('Error:', err);
        }
    }
}))();
