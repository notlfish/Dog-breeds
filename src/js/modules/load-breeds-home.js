import getBreeds from './GET-breeds-home';
import likeIcon from '../../img/heart-icon.png';

const loadBreeds = async () => {
  const dogBreeds = await getBreeds();
  const listContainer = document.querySelector('.list-container');
  dogBreeds.forEach((e) => {
    listContainer.innerHTML += `<li id="${e.id}">
    <img class="breed-img" src="${e.image.url}">
    <div class="name-like-container">
    <h2 class="names">${e.name}</h2>
    <div class="likes-container">
    <img class="like-icon" src="${likeIcon}">
    <h4>0 likes</h4>
    </div>
    </div>
    <button id="comment-${e.id}">Comments</button>
    </li>`;
  });
};

export default loadBreeds;