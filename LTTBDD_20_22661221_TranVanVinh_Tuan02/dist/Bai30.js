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
// Bai 30: Use async/await + Promise.allSettled() to handle multiple API calls and display their status
function fetchTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok)
            throw new Error(`Failed to fetch todo ${id}`);
        return yield response.json();
    });
}
function handleMultipleFetches() {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = [1, 2, 3, 4, 5];
        const promises = ids.map(fetchTodo);
        const results = yield Promise.allSettled(promises);
        results.forEach((result, idx) => {
            if (result.status === 'fulfilled') {
                console.log(`Todo ${ids[idx]} success:`, result.value);
            }
            else {
                console.log(`Todo ${ids[idx]} failed:`, result.reason);
            }
        });
    });
}
handleMultipleFetches();
