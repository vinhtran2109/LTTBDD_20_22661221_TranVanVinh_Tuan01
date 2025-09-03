// Bai 17: Use for await...of to iterate over an array of Promises
function asyncSquare(n: number): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(n * n), 300));
}

(async () => {
  const promises = [1, 2, 3, 4].map(asyncSquare);
  for await (const result of promises) {
    console.log('Square:', result);
  }
})();
