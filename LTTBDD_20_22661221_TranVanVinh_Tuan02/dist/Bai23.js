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
// Bai 23: Fetch a list of todos and filter out those that are not completed
function fetchCompletedTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = yield response.json();
        const completed = todos.filter((todo) => todo.completed);
        console.log('Completed todos:', completed);
    });
}
fetchCompletedTodos();
