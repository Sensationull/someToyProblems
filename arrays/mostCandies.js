/*
    input: array
    output: a number
    constraints: effiecency
    edgecases:
    find the max number of unique candies after n / 2
    create obj
    create divisor
    iterate through array
        create char map
    [3,4,7,7,6,6,6,6] take 3 of 6, and one of 7
    [1,2,3,4,5,6,7,8] take one of each at random
    [1,1,1,1,1,2,3,3,4,5] take 4 of 1 and one of 3
*/

const solution = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    const char = arr[i];
    obj[char] = obj[char] + 1 || 1;
  }
  const leftover = arr.length / 2;
  const candies = Object.keys(obj).length;
  return leftover >= candies ? candies : candies - (candies - leftover);
};

solution([3, 4, 7, 7, 6, 6, 6, 6]); // 4
solution([1, 1, 1, 1, 1, 2, 3, 3, 4, 5]); // 5
solution([1, 2, 3, 4, 5, 6, 7, 8]); // 5
