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
// Bai 16: Call multiple async functions in parallel using Promise.all()
function asyncDouble(n) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 500));
        return n * 2;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Promise.all([
        asyncDouble(2),
        asyncDouble(4),
        asyncDouble(6)
    ]);
    console.log('Parallel results:', results);
}))();
