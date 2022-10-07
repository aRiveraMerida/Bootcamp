import { getData } from '../../services/service';
import '../../pages/GamePage/GameStyle.css'

export const setupCard = async () => {
  const games = await getData('games');
  mapInfoGame(games);
}

const templateCard = (game) => {
  document.querySelector('#GameContainer').innerHTML += `
  <div class="panel" style="background-image: url(${game.cover})">
    <h3>${game.title}</h3>
  </div>
`
  eventListerner();
}

const mapInfoGame = (listGames) => {
  const games = listGames.map((game) => {
    return {
      id: game.id,
      cover: game.cover,
      title: game.title
    }
  })
  for (const game of games) {
    templateCard(game)
  }

}

const eventListerner = () => {
  const panels = document.querySelectorAll('.panel');
  panels[0].classList.add('active');
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
    })
  })


}


const removeActiveClasses = () => {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}