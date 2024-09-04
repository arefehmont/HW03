const findLongestWord = (str) => {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  
  findLongestWord("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, repellendus.");