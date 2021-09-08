import { KEY_PREFIX } from './load-breeds-home';
import { fetchComments } from './comments-api-handler';

export const displayBreedInfo = (container, info) => {
  const imageContainer = container.querySelector('#popup-image');
  imageContainer.innerHTML = '';
  const breedImage = document.createElement('img');
  breedImage.alt = info.name;
  breedImage.src = info.image.url;
  breedImage.classList.add('popup-image');
  imageContainer.appendChild(breedImage);

  const breedName = container.querySelector('.popup-breed-name');
  breedName.innerHTML = info.name;

  const infoCategories = ['bred_for', 'breed_group', 'height', 'life_span',
    'temperament'];
  infoCategories.forEach((category) => {
    const categoryDisplay = container.querySelector(`#popup-${category}`);
    categoryDisplay.innerHTML = info[category];
  });
};

export const displayComment = (container, comment) => {
  const commentDisplay = document.createElement('li');
  commentDisplay.innerHTML = `
    <span class="comment-date">${comment.creation_date}</span>
    <span class="commenter">${comment.username}:</span>
    <span class="comment-content">${comment.comment}</span>
`;
  container.appendChild(commentDisplay);
};

export const closePopupListener = (popup) => (event) => {
  event.preventDefault();
  popup.classList.add('d-none');
};

const openPopupListener = (commentButton, popup) => (event) => {
  event.preventDefault();
  const breedId = commentButton.closest('.breed-card').id;
  const storageKey = `${KEY_PREFIX}-${breedId}`;
  const breedInfo = JSON.parse(localStorage.getItem(storageKey));
  displayBreedInfo(popup, breedInfo);
  fetchComments(breedId).then((comments) => {
    const commentsContainer = popup.querySelector('#comments-list');
    commentsContainer.innerHTML = '';
    comments.forEach((comment) => { displayComment(commentsContainer, comment); });
    popup.classList.remove('d-none');
  });
};

export default openPopupListener;
