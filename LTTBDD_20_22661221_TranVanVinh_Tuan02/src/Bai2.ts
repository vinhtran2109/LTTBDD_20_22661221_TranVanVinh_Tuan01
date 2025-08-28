export const createNumberAfter1s = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
          setTimeout(() => {
     resolve(10)
    }, 1000); 
    } else {
      reject("Failed ");
    }
  });
};