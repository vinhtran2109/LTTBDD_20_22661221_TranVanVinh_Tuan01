// Bai 26: Use async/await with setTimeout to simulate a 5-second wait
async function waitFiveSeconds() {
  console.log('Waiting 5 seconds...');
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log('Done waiting!');
}

waitFiveSeconds();
