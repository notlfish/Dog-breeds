import loadBreeds from './modules/load-breeds-home';
import '../style.css';
// import pagination from './modules/pagination-home';
import openPopupListener, { closePopupListener } from './modules/popup';
import { POSTLikes } from './modules/POST-likes-home';
import { GETLikes, loadLikes } from './modules/GET-load-likes-home';
import liked from './modules/liked';

const popup = document.getElementById('popup-article');

document.addEventListener('DOMContentLoaded', (...e) => {
  loadBreeds(...e)
    .then(() => {
      const commentButtons = document.getElementsByClassName('comment-button');
      Array.from(commentButtons).forEach((button) => {
        button.addEventListener('click', openPopupListener(button, popup));
      });
    });
    GETLikes(...e);
    loadLikes(...e);
});

window.addEventListener('click', (e) => {
  if (e.target.className === 'like-icon' || 'like-icon liked-icon') {
    POSTLikes(e.target.id);
    liked(e.target.id);
  };
})

const closePopupButton = document.getElementById('close-popup');
closePopupButton.addEventListener('click', closePopupListener(popup));
