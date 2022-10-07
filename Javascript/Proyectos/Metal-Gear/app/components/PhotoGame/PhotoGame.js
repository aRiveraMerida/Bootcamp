import { getData } from '../../services/service';
import '../../pages/GamePage/GameStyle.css'

export const setupPhoto = async () => {
  const games = await getData('games');
  mapPhotoGame(games);

}

const templatePhoto = (games) => {
  const photoContainer = document.createElement('div');
  photoContainer.classList.add('-fx-image-gal');
  console.log(photoContainer);
  for (const game of games) {
    photoContainer.innerHTML += `
    <div class="-fx-gal-item">
      <div class="-fx-gal-image-thumb" tabindex="1">
          <img src=${game.cover} />
      </div>
    </div>
  `
  }
  document.querySelector('#GameContainer').insertAdjacentElement('afterend', photoContainer);
}

const mapPhotoGame = (listGames) => {
  const games = listGames.map((game) => {
    return {
      id: game.id,
      cover: game.cover,
    }
  })
  templatePhoto(games)

}