//Encuentra la palabra mas larga
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman molon",
  "Captain M.",
];

const findLongestWord = (list) => {
  let longestWord = "";
  for (const item of list) {
    longestWord = item.length > longestWord.length ? item : longestWord;
  }
  return longestWord;
};

console.log(findLongestWord(avengers))