// Bai 11: Convert Exercise 1 (square a number) to async/await
async function squareAsync(n: number): Promise<number> {
  return n * n;
}

(async () => {
  const result = await squareAsync(2);
  console.log('Square:', result); 
})();
