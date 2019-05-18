const findMaxConsecutiveOnes = (array) => {
  /*
  create counter variable
  create max variable
  iterate through the array
    if char is 1
      inc count
      if count > max
        max = count
    else
      count = 0;
  return max
  */
  let count = 0;
  let max = 0;
  for (let i = 0; i < array.length; i + 1) {
    if (array[i] === 1) {
      count += 1;
      max = count > max ? count : max;
    } else {
      count = 0;
    }
  }
  return max;
};

const input = [1, 1, 0, 1, 1, 1];

findMaxConsecutiveOnes(input);
