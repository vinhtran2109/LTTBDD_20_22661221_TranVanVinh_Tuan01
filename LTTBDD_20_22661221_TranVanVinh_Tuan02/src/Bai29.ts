// Bai 29: queueProcess() processes tasks sequentially in a queue
function asyncTask(id: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000 + Math.random() * 1000));
}

async function queueProcess() {
  const results = [];
  for (let id = 1; id <= 5; id++) {
    const result = await asyncTask(id);
    results.push(result);
  }
  console.log('Queue results:', results);
}

queueProcess();
