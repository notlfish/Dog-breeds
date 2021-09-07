import getBreeds from './GET-home';

const load = () => {
  getBreeds();
  document.body.innerHTML = `<main class="container">
  <ul class="list-container"></ul>
  </main>`;
};

export default load;