// Bai 24: Async function postData() that sends a POST request to a test API
async function postData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
  });
  const data = await response.json();
  console.log('POST response:', data);
}

postData();
