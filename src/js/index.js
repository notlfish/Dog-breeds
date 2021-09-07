import load from './modules/load-home';

const addItem = () => {
  const newItem = '<li>Mientras miro las nuevas olas</li>';
  const list = document.getElementById('list');
  list.innerHTML += newItem;
};

document.addEventListener('DOMContentLoaded', load());

export default addItem;