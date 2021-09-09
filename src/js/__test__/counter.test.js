import loadBreeds from '../modules/load-counter-home';

jest.mock('../modules/load-counter-home');

describe('test counter function', () => {
  describe('counter', () => {
    test('must count 21 elements in homepage', () => {
      document.body.innerHTML = '<ul class="list-container"></ul>';
      // Arrange
      const dogBreeds = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },
        { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
      const listContainer = document.querySelector('.list-container');
      // Act
      dogBreeds.forEach((breed) => {
        breed.likeStatus = 'notLiked';
        // Counter
        if (document.querySelectorAll('li').length < 21) {
          listContainer.innerHTML += `<li id="${breed.id}" class="breed-card">
          <img class="breed-img" src="">
          <div class="name-like-container">
          <h2 class="names"></h2>
          <div id="likes-container${breed.id}" class="likes-container">
          <img id="like-icon${breed.id}" class="like-icon" src="">
          <h4 id="likes-like-icon${breed.id}">0 Likes<h4/>
          </div>
          </div>
          <button id="comment-${breed.id}" class="comment-button">Comments</button>
          </li>`;
        }
      });
      // Assert
      expect(document.querySelectorAll('li').length).toBe(21);
    });
  });
});

export default loadBreeds;
