// Bai 8: Promise chain - square, double, add 5
const square = (n: number) => Promise.resolve(n * n);
const double = (n: number) => Promise.resolve(n * 2);
const addFive = (n: number) => Promise.resolve(n + 5);

square(2)
  .then(double)
  .then(addFive)
  .then(result => console.log('Result:', result));
