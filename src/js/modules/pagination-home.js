import getBreeds from "./GET-breeds-home";

const pagination = async (currPage) => {

  const paginationContainer = document.querySelector('.pagination');
  const dogBreeds = await getBreeds();
  const numberOfItems = dogBreeds.length
  const numberPerPage = 6
  const currentPage = 1
  const numberOfPages = Math.ceil(numberOfItems/numberPerPage);


    const trimStart = (currentPage-1)*numberPerPage;
    const trimEnd = trimStart + numberPerPage;
    console.log(dogBreeds.slice(trimStart, trimEnd))

    
}

export default pagination;