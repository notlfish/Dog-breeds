import getBreeds from './GET-breeds-home';

const pagination = async () => {
// eslint-disable-next-line
  const paginationContainer = document.querySelector('.pagination');
  const dogBreeds = await getBreeds();
  const numberOfItems = dogBreeds.length;
  const numberPerPage = 6;
  const currentPage = 1;
  // eslint-disable-next-line
  const numberOfPages = Math.ceil(numberOfItems/numberPerPage);
  const trimStart = (currentPage - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;
  dogBreeds.slice(trimStart, trimEnd);
};

export default pagination;