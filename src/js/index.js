import loadBreeds from './modules/load-breeds-home';
import '../style.css';
import pagination from './modules/pagination-home';
import openPopupListener, { closePopupListener } from './modules/popup';

const popup = document.getElementById('popup-article');

document.addEventListener('DOMContentLoaded', (...e) => {
  loadBreeds(...e)
    .then(() => {
      const commentButtons = document.getElementsByClassName('comment-button');
      Array.from(commentButtons).forEach((button) => {
        button.addEventListener('click', openPopupListener(button, popup));
      });
    })
    .then(() => {
      document.getElementById('footer').classList.remove('d-none');
    });
  pagination(...e);
});

const closePopupButton = document.getElementById('close-popup');
closePopupButton.addEventListener('click', closePopupListener(popup));
