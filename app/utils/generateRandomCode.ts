export const generateRandomCode = (length: number) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10); // generates a random number between 0 and 9
  }
  return result;
};
