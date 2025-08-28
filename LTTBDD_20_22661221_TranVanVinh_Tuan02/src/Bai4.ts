export function getRandomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const num = Math.random()

    setTimeout(() => {
      if (num > 2) {
        resolve(num);  
      } else {
        reject("number too small:  " + num); 
      }
    }, 1000);
  });
}

getRandomNumber()
  .then(num => {
    console.log("Success, random number:", num);
  })
  .catch(err => {
    console.error("Error:", err);
  });