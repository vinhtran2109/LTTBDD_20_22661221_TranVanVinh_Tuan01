// Bai 18: Async function fetchUser(id) simulates API call (resolves user object after 1s)
interface User {
  id: number;
  name: string;
}

async function fetchUser1(id: number): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id, name: `User${id}` };
}

(async () => {
  const user = await fetchUser(1);
  console.log('Fetched user:', user);
})();
