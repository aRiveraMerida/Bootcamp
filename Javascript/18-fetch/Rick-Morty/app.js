let characters;
let charactersTransform;
let nextPage;

const loadCharacters = async (url = 'https://rickandmortyapi.com/api/character') => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    characters = data;
    tranformData();
  } catch (error) {
    console.log(error);
  }
}

const tranformData = () => {
  console.log('Mapeo', characters);
  nextPage = characters.info.next;
  charactersTransform = characters.results.map((character) => {
    return {
      name: character.name,
      status: character.status,
      specie: character.specie,
      image: character.image
    }
  })
  setupCharacters();
}

const listToInsertData = document.querySelector('#listCharacters');

const setupCharacters = () => {
  console.log('Pintado', charactersTransform)
  charactersTransform.forEach((element) => {
    const liElement = `<li> 
    <h1>${element.name}</h1>
      <img src=${element.image} alt=${element.name}>
      <p>${element.species} || ${element.status}</p>
    </li>`
    listToInsertData.innerHTML += liElement;
  });
}

loadCharacters();


const nextCharacters = () => {
  listToInsertData.innerHTML = '';
  loadCharacters(nextPage);
}

