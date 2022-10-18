const getAmiibos = async () => {
  const data = await fetch("https://amiiboapi.com/api/amiibo/");
  const jsonData = await data.json();
  const { amiibo } = jsonData;
  transformData(amiibo);
};

const transformData = (list) => {
  const mappedAmiibos = list.map((item) => ({
    series: item.amiiboSeries,
    name: item.character,
    game: item.gameSeries,
    image: item.image,
  }));
  printAmiibos(mappedAmiibos);
};

const printAmiibos = (list) => {
  const container = document.querySelector("#container");

  for (let i = 0; i < 30; i++) {
    const item = list[i];
    const template = `
    <figure>
    <h2>${item.name} - ${item.game}</h2>
    <img src=${item.image} alt=${item.name}/>
    <h3>${item.series}</h3>
    </figure>
    `;
    container.innerHTML += template;
  }
};

getAmiibos();
