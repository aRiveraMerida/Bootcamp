const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) reject('No tengo el listado o la caja para guardar el item')
    setTimeout(() => {
      list.push(item);
      resolve(list);
    }, 10000)
  });
  return promise;
}

const listFruit = ['apple', 'pear', 'pinapple'];

console.log(addItem('banana', listFruit));

addItem('banana', listFruit).then((response) => {
  console.log(`El listado final es: ${response}`);
})
  .catch((err) => {
    throw new Error(err);
  });

console.log(`Sigo ejecutandome: ${listFruit}`);

const listCoenMovies = ['Raising Arizona', 'Fargo', 'Barton Fink'];

addItem('The big Lewoski', listCoenMovies)
  .then(() => addItem('O Brother, Where Art Thou?', listCoenMovies))
  .then(() => addItem('The Man Who Wasnt There', listCoenMovies))
  .then(() => addItem('The Ladykillers', listCoenMovies))
  .then(() => {
    console.log(listCoenMovies);
  }).catch((error) => {
    throw new Error(error)
  });