// Bai 12: Async function calls simulateTask(2000) and logs result
function simulateTask11(ms: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve(`Task finished in ${ms}ms`), ms));
}

async function runTask() {
  const result = await simulateTask(2000);
  console.log(result);
}

runTask();
