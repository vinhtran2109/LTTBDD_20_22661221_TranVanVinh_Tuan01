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
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 1000));
        return { id, name: `User${id}` };
    });
}
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = [];
        for (const id of ids) {
            const user = yield fetchUser(id);
            users.push(user);
        }
        return users;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield fetchUsers([1, 2, 3]);
    console.log('Fetched users:', users);
}))();
