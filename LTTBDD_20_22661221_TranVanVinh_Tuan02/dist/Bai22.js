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
// Bai 22: Call the API multiple times and log the results
function fetchTodos(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const id of ids) {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const data = yield response.json();
            console.log(`Todo ${id}:`, data);
        }
    });
}
fetchTodos([1, 2, 3]);
