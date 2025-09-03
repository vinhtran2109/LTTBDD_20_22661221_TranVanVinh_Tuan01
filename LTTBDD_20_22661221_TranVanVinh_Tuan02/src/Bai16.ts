// Bai 16: Call multiple async functions in parallel using Promise.all()
async function asyncDouble(n: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return n * 2;
}

(async () => {
  const results = await Promise.all([
    asyncDouble(2),
    asyncDouble(4),
    asyncDouble(6)
  ]);
  console.log('Parallel results:', results); 
})();
