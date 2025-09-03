// Bai 15: Call multiple async functions sequentially using await
async function asyncAdd(n: number): Promise<number> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return n + 1;
}

async function sequentialCalls() {
  let result = await asyncAdd(1);
  result = await asyncAdd(result);
  result = await asyncAdd(result);
  console.log('Sequential result:', result); 
}

sequentialCalls();
