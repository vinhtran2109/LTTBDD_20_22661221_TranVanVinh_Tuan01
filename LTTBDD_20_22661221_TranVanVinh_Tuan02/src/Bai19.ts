// Bai 19: Async function fetchUsers(ids) calls fetchUser for each ID
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id, name: `User${id}` };
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  const users = [];
  for (const id of ids) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
}

(async () => {
  const users = await fetchUsers([1, 2, 3]);
  console.log('Fetched users:', users);
})();
