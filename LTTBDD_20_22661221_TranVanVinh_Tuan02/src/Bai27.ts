// Bai 27: fetchWithRetry(url, retries) retries up to retries times if the API call fails
async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let i = 0; i <= retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Fetch failed');
      return await response.json();
    } catch (err) {
      if (i === retries) throw err;
      console.log(`Retrying... (${i + 1})`);
    }
  }
}

fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then(data => console.log('Fetched with retry:', data))
  .catch(err => console.error('Failed:', err));
