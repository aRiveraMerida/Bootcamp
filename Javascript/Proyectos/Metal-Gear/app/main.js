import './style.css'

import { initGamePage } from './pages/GamePage/GamePage';
import { initCharacter } from './pages/CharacterPage/CharacterPage';

initGamePage()

const goTo = () => {
  console.log('GO');
  initCharacter()
}

document.querySelector('#goTo').addEventListener(
  'click', goTo
)

