// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

const message = [
  'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l'
];

// reverseWords(message);

// console.log(message.join(''));
// Prints: 'steal pound cake'

// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

/**
 * I: an array
 * O: an array
 * C: In place reassignment
 * E: invalid input, empty array, array length 1
 *
 * You could use the built in reverse method?
 *  NO because you need to revese the word, not every item
 * 
 * What if you made an array and put every word into that new array in reverse, then mutated the original array  
 * 
 */

const reverseWords = (arr) => {
  // First we reverse all the characters in the entire message
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word

  const reverseCharacters = (word, start, end) => {
    while (start < end) {
      const temp = word[start];
      word[start] = word[end];
      word[end] = temp;
      start++;
      end--;
    }
  }

  let currentWordStartIndex = 0; 
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === ' ') {
      reverseCharacters(arr, currentWordStartIndex, i - 1,);
      currentWordStartIndex = i + 1;
    }
  }
}

reverseWords(message);
console.log(message.join(''))