const ApiBreedsUrl = ('https://api.TheDogAPI.com/v1/breeds');

const getBreeds = () => {
return fetch(ApiBreedsUrl, {
  method: 'GET',
  headers: {
    'x-api-key': 'be1ccef0-f839-40e0-8774-5ff5eeb18b34',
  }
})
  .then(response => response.json())
  .then(data => data);
}
  export default getBreeds;