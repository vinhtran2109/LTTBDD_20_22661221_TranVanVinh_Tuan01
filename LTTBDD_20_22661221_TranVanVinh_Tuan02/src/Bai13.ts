// Bai 13: Handle errors using try/catch with async/await
async function errorProneTask() {
  throw new Error('Something went wrong!');
}

(async () => {
  try {
    await errorProneTask();
  } catch (err) {
    if (err instanceof Error) {
      console.error('Caught error:', err.message);
    } else {
      console.error('Caught error:', err);
    }
  }
})();
