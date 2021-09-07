import loadBreeds from './modules/load-breeds-home';
import '../style.css';
import pagination from './modules/pagination-home';

const addItem = () => {
  const newItem = '<li>Mientras miro las nuevas olas</li>';
  const list = document.getElementById('list');
  list.innerHTML += newItem;
};

document.addEventListener('DOMContentLoaded', (...e) => {
  loadBreeds(...e);
  pagination(...e);
});

export default addItem;