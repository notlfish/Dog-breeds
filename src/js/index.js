import loadBreeds from './modules/load-breeds-home';
import '../style.css';
import pagination from './modules/pagination-home';

document.addEventListener('DOMContentLoaded', (...e) => {
  loadBreeds(...e);
  pagination(...e);
});