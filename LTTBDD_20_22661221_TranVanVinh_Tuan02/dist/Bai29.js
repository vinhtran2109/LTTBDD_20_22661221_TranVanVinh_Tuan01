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
// Bai 29: queueProcess() processes tasks sequentially in a queue
function asyncTask(id) {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000 + Math.random() * 1000));
}
function queueProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (let id = 1; id <= 5; id++) {
            const result = yield asyncTask(id);
            results.push(result);
        }
        console.log('Queue results:', results);
    });
}
queueProcess();
