// Bai 20: Add a timeout: if the API call takes more than 2 seconds, throw an error
interface User {
  id: number;
  name: string;
}

function fetchUserWithTimeout(id: number, timeout = 2000): Promise<User> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timeout!')), timeout);
    setTimeout(() => {
      clearTimeout(timer);
      resolve({ id, name: `User${id}` });
    }, Math.random() * 3000); 
  });
}

(async () => {
  try {
    const user = await fetchUserWithTimeout(1);
    console.log('Fetched user:', user);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error:', err.message);
    } else {
      console.error('Error:', err);
    }
  }
})();
