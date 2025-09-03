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
// Bai 28: batchProcess() processes 5 async tasks at once (use Promise.all)
function asyncTask1(id) {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000 + Math.random() * 1000));
}
function batchProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [1, 2, 3, 4, 5].map(asyncTask1);
        const results = yield Promise.all(tasks);
        console.log('Batch results:', results);
    });
}
batchProcess();
