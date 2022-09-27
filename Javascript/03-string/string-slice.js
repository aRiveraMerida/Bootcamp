const sentence = "Pedro esta muy concentrado";

console.log(sentence.slice(0, 5));

const newSentence = sentence.replace(sentence.slice(0, 5), 'Juan');

console.log(newSentence);