import { setupPhoto } from '../../components/PhotoGame/PhotoGame';
import './CharacterStyle.css'

export const initCharacter = () => {
  document.querySelector('#GameContainer').innerHTML = '';
  document.querySelector('#AuthorContainer').innerHTML = '';
  setupPhoto();
}