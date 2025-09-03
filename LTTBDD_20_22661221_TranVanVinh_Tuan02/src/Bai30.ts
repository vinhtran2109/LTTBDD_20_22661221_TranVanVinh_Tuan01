// Bai 30: Use async/await + Promise.allSettled() to handle multiple API calls and display their status
async function fetchTodo(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch todo ${id}`);
  return await response.json();
}

async function handleMultipleFetches() {
  const ids = [1, 2, 3, 4, 5];
  const promises = ids.map(fetchTodo);
  const results = await Promise.allSettled(promises);
  results.forEach((result: PromiseSettledResult<any>, idx: number) => {
    if (result.status === 'fulfilled') {
      console.log(`Todo ${ids[idx]} success:`, result.value);
    } else {
      console.log(`Todo ${ids[idx]} failed:`, result.reason);
    }
  });
}

handleMultipleFetches();
