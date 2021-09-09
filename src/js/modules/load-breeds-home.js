import getBreeds from './GET-breeds-home';
import likeIcon from '../../img/heart-icon.png';

export const KEY_PREFIX = 'breedsInfo';

const loadBreeds = async () => {
  const dogBreeds = await getBreeds();
  const listContainer = document.querySelector('.list-container');
  dogBreeds.forEach((breed) => {
    if (document.querySelectorAll('li').length < 21) {
      breed.height = breed.height.metric;
      localStorage.setItem(`${KEY_PREFIX}-${breed.id}`, JSON.stringify(breed));
      listContainer.innerHTML += `<li id="${breed.id}" class="breed-card">
      <img class="breed-img" src="${breed.image.url}">
      <div class="name-like-container">
      <h2 class="names">${breed.name}</h2>
      <div id="likes-container${breed.id}" class="likes-container">
      <img id="${breed.id}" class="like-icon" src="${likeIcon}">
      <h4 id="likes-${breed.id}">0 Likes<h4/>
      </div>
      </div>
      <button id="comment-${breed.id}" class="comment-button">Comments</button>
      </li>`;
    }
  });
};

export default loadBreeds;
