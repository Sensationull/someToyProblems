const isPowerOfThree = (n) => {
  if (n === 1 || n === 3) return true;
  const helper = (number) => {
    const current = number / 3;
    if (!Number.isInteger(current) || current <= 0) return false;
    if (current === 3) return true;
    return helper(current);
  };
  return helper(n);
};

isPowerOfThree(3); // true
isPowerOfThree(300); // true
isPowerOfThree(1); // true
isPowerOfThree(123); // false
