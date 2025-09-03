// Bai 10: Use .finally() to log "Done" when a Promise finishes
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 500);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));
