// function wordCountEngine(document) {
  /*
    I: string
    O: a matrix of strings and their counts
    C: time limit
    E: Empty Strings, return an empty matrix
    
    
    create a result variable
    create a temp variable for the word and the count
    
    iterate the string to clean punctuation
    iterate over the cleaned string to edit the cases
    
    "practice makes perfect youll only get perfect by practice just practice"
    
    split the string into an array, iterate over that array of individaual words
    create a map of the wordCounts that will look like
    {
    practice: [3, 0],
    perfect: [2,2]
    makes: [1,1]
    get: [1,6]
    youll: [1,4]
    ...
    }
    
    {
     3: [practice],
     2: [perfect],
     1: [makes, get, youll]
    }
    
    create a secondary hashmap
     if the number of occureneces doesnt exist
      add it to the map with the word as the value
     if it does
      add the word to the existing values 
    
    iterate from the highest count in the hashmap
      if the property exists in the hash map and is the only value
         place into output matrix
       if the property exists and it's not the only value
        sort the array
          place each of the items into the output accordingly
      
    return the output
    [practice, 23] []
  */
 
//   const result = [];
  
//   let newDoc = document.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
//   let cleaned = newDoc.toLowerCase();
//   let words = cleaned.split(' ');
//   let wordCounts = {};
  
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (!word) continue;
//     if (!wordCounts[word]) {
//       wordCounts[word] = [1, i];
//     } else {
//       wordCounts[word][0]++;
//     }
//   }

//   let occurences = {};
//   let highest = 0;
//   for (let word in wordCounts) {
//     let count = wordCounts[word][0];
//     if (!occurences[count]) {
//       highest = highest > count ? highest : count
//       occurences[count] = [word];
//     } else {
//       occurences[count].push(word);
//     }
//   }
  
//   for (let i = highest; i > 0; i-- ) {
//     if (!occurences[i]) {
//       continue;
//     }
//     if (occurences[i] && occurences[i].length === 1) {
//        result.push([occurences[i][0], `${i}`]);
//     } 
//     if (occurences[i] && occurences[i].length > 1) {
//       let sorted = occurences[i].sort((a,b) => {
//         wordCounts[a][1] - wordCounts[b][1]
//       })
//       for (let item of sorted ) {
//        result.push([item, `${i}`]);
//       }
//     }
//   }
  
//   return result;
// }

console.log(wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!"));
/*

function wordCountEngine(document) {
  /*
    Inputs: a string
    Outputs: a matrix;
    Constraints: none
    Edge Caes: empty doc
    
    clean the string
    "Practice makes perfect. you'll only get Perfect by practice. just practice!" 
    =>
    "practice makes perfect youll only get perfect by practice just practice"
    count the occurences by creating a hashmap
      word: [timesSeen, first index];
      practice: [3, 0];
    create a separate hashmap focusing on the number of times
      timesSeen: [word, word, word]
      1: [makes, youll, get];
    for each item in the second hash map 
      if the item has more than 1 entry
        sort the items by index position in first hashmap
     create a for loop
      if the item only has an array of length one, 
        push the item into the array via [word, count]
      if the item has larger than array length 1
        for each item push into the array in the same fashion
    return result;
  
  
 const cleaned = document.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
 let arr = cleaned.split(' ');
 const result = [];
 let wordCountAndPosition = {};
 for (let i = 0; i < arr.length; i++) {
   if (!wordCountAndPosition[arr[i]]) {
     wordCountAndPosition[arr[i]] = [1, i];
   } else {
     wordCountAndPosition[arr[i]][0] = wordCountAndPosition[arr[i]][0] + 1;
   }
 }
 let timesSeen = {};
 for (let key in wordCountAndPosition) {
   if (!timesSeen[wordCountAndPosition[key][0]]) {
     timesSeen[wordCountAndPosition[key][0]] = [key];
   } else {
     timesSeen[wordCountAndPosition[key][0]].push(key);
   }
 }

 for (let item in timesSeen) {
   if (timesSeen[item].length > 1) {
     timesSeen[item].sort(function (a,b) {
        return wordCountAndPosition[a][1] - wordCountAndPosition[b][1];
     })
   }
 }

 for (let entry in timesSeen) {
   if (timesSeen[entry].length === 1) {
     result.push([timesSeen[entry][0], entry]);
   } else {
     for (let word of timesSeen[entry] ) {
       result.push([word, entry]);
     }
   }
 }
 
 return result.reverse();
}

const test = "Practice makes perfect. you'll only get Perfect by practice. just practice!"

console.log(wordCountEngine(test));
*/

function wordCountEngine(document) {

  const result = [];
    
    let newDoc = document.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    let cleaned = newDoc.toLowerCase();
    let words = cleaned.split(' ');
    let wordCounts = {};
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (!word) continue;
      if (!wordCounts[word]) {
        wordCounts[word] = [1, i];
      } else {
        wordCounts[word][0]++;
      }
    }
  
    let occurences = {};
    let highest = 0;
    for (let word in wordCounts) {
      let count = wordCounts[word][0];
      if (!occurences[count]) {
        highest = highest > count ? highest : count
        occurences[count] = [word];
      } else {
        occurences[count].push(word);
      }
    }
    
    for (let i = highest; i >= 0; i-- ) {
      if (!occurences[i]) {
        continue;
      }
      if (occurences[i] && occurences[i].length === 1) {
         result.push([occurences[i][0], `${i}`]);
      } 
      if (occurences[i] && occurences[i].length > 1) {
        const quickSort = arr => {
          if (arr.length <= 1) {
            return arr;
          }
          
          const less = [];
          const greater = [];
          const pivot = arr.pop();
          
          for (let word of arr) {
            if (wordCounts[word][1] <= wordCounts[pivot][1]) {
              less.push(word);
            } else {
              greater.push(word);
            }
          }
          return [...quickSort(less), pivot, ...quickSort(greater)];
        }
        const quick = quickSort(occurences[i]);
        for (let item of quick ) {
         result.push([item, `${i}`]);
        }
      }
    }
    
    return result;
  }
  
  const test = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
  // [["just","4"],["practice","3"],["perfect","2"],["makes","1"],["youll","1"],["get","1"],["by","1"]]
  const test2 =  "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. "
  // [["and","4"],["every","3"],["is","3"],["a","3"],["quotation","3"],["all","2"],["book","1"],["house","1"],["out","1"],["of","1"],["forests","1"],["mines","1"],["stone","1"],["quarries","1"],["man","1"],["from","1"],["his","1"],["ancestors","1"]]
  const test3 = "Look If you had One shot, Or one opportunity, To seize everything you ever wanted, In one moment, Would you capture it, Or just let it slip?"
  // [["you","3"],["one","3"],["or","2"],["it","2"],["look","1"],["if","1"],["had","1"],["shot","1"],["opportunity","1"],["to","1"],["seize","1"],["everything","1"],["ever","1"],["wanted","1"],["in","1"],["moment","1"],["would","1"],["capture","1"],["just","1"],["let","1"],["slip","1"]]
  const test4 = "Cause I'm Slim Shady, yes I'm the real Shady, All you other Slim Shadys are just imitating So won't the real Slim Shady, please stand up, Please stand up, Please stand up"
  // [["slim","3"],["shady","3"],["please","3"],["stand","3"],["up","3"],["im","2"],["the","2"],["real","2"],["cause","1"],["yes","1"],["all","1"],["you","1"],["other","1"],["shadys","1"],["are","1"],["just","1"],["imitating","1"],["so","1"],["wont","1"]]
  
  console.log(wordCountEngine(test));