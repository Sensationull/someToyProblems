function wordCountEngine(document) {
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
 
  const result = [];
  const temp = [];
  
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
  
  for (let i = highest; i > 0; i-- ) {
    if (!occurences[i]) {
      continue;
    }
    if (occurences[i] && occurences[i].length === 1) {
       result.push([occurences[i][0], `${i}`]);
    } 
    if (occurences[i] && occurences[i].length > 1) {
      let sorted = occurences[i].sort((a,b) => {
        wordCounts[a][1] - wordCounts[b][1]
      })
      for (let item of sorted ) {
       result.push([item, `${i}`]);
      }
    }
  }
  
  return result;
}

console.log(wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!"));