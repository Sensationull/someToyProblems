const addDigits = (num) => {
  const findDigits = (n) => {
    let sign = 1;
    let sum = 0;
    const strNum = n.toString()
    const digits = strNum.split('');
    let i = 0;
    if (digits.length <= 1) {
      return digits;
    }
    if (digits[0] === '-') {
      sign = -1;
      i += 1;
    }
    for (i; i < digits.length; i++) {
      if (digits[i] >= '0' && digits[i] <= '9') {
        const number = parseInt(digits[i]);
        sum += number;
      }
    }
    
    return findDigits(sum);
  };
  return parseInt(findDigits(num));
};

addDigits(38); // 2
