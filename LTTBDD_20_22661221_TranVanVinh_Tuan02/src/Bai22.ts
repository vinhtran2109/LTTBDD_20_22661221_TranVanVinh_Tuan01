// Bai 22: Call the API multiple times and log the results
async function fetchTodos(ids: number[]) {
  for (const id of ids) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    console.log(`Todo ${id}:`, data);
  }
}

fetchTodos([1, 2, 3]);
