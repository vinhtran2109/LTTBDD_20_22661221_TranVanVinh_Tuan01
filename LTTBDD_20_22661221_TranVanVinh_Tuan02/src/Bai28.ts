// Bai 28: batchProcess() processes 5 async tasks at once (use Promise.all)
function asyncTask1(id: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000 + Math.random() * 1000));
}

async function batchProcess() {
  const tasks = [1, 2, 3, 4, 5].map(asyncTask1);
  const results = await Promise.all(tasks);
  console.log('Batch results:', results);
}

batchProcess();
