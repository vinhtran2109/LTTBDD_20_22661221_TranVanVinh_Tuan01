// Bai 23: Fetch a list of todos and filter out those that are not completed
async function fetchCompletedTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  const completed = todos.filter((todo: any) => todo.completed);
  console.log('Completed todos:', completed);
}

fetchCompletedTodos();
