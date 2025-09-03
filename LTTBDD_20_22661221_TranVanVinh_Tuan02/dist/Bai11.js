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
// Bai 11: Convert Exercise 1 (square a number) to async/await
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return n * n;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield squareAsync(2);
    console.log('Square:', result);
}))();
