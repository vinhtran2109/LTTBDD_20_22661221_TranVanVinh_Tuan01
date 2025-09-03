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
// Bai 15: Call multiple async functions sequentially using await
function asyncAdd(n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 500));
        return n + 1;
    });
}
function sequentialCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield asyncAdd(1);
        result = yield asyncAdd(result);
        result = yield asyncAdd(result);
        console.log('Sequential result:', result);
    });
}
sequentialCalls();
