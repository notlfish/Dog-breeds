import getBreeds from './GET-breeds-home';

const loadBreeds = async () => {
  const dogBreeds = await getBreeds();
  console.log(dogBreeds);
  const listContainer = document.querySelector('.list-container');
  const newBreed = `<li id="${dogBreeds[0].id}">
  <img class="breed-img" src="${dogBreeds[0].image.url}">
  <h2>${dogBreeds[0].name}</h2>
  </li>`;

  listContainer.innerHTML += newBreed;

};

export default loadBreeds;