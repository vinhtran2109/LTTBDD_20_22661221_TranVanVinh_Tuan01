// Bai 14: Async function waits 1s and returns number × 3
async function tripleAfter1s(n: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return n * 3;
}

(async () => {
  const result = await tripleAfter1s(5);
  console.log('Triple:', result); 
})();
