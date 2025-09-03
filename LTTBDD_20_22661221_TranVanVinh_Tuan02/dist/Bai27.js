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
// Bai 27: fetchWithRetry(url, retries) retries up to retries times if the API call fails
function fetchWithRetry(url, retries) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i <= retries; i++) {
            try {
                const response = yield fetch(url);
                if (!response.ok)
                    throw new Error('Fetch failed');
                return yield response.json();
            }
            catch (err) {
                if (i === retries)
                    throw err;
                console.log(`Retrying... (${i + 1})`);
            }
        }
    });
}
fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3)
    .then(data => console.log('Fetched with retry:', data))
    .catch(err => console.error('Failed:', err));
