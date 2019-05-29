const wordPattern = (pattern, str) => {
  const words = str.split(' ');
  const obj = {};
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i += 1) {
    const val = pattern[i];
    const word = words[i];
    if (!obj[val] && !Object.values(obj).includes(word)) {
      obj[val] = word;
    }
    if (obj[val] !== word) {
      return false;
    }
  }
  return true;
};

wordPattern('abba', 'dog cat cat dog'); // true
wordPattern('abba', 'dog dog dog dog'); // false
wordPattern('aba', 'cat cat cat dog'); // false
