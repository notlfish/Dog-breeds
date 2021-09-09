import loadBreeds from "./load-breeds-home";

export const GETLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aliNSyHfj9kbhiXrqKsy/likes/', {
    method: 'GET',
    })
  return response.json();
}

export const loadLikes = async () => {
  await loadBreeds();
  const likes = await GETLikes();
  console.log(likes);
  likes.forEach((item) => {
    const likesElement = document.getElementById(`likes-${item.item_id}`);
    if (likesElement) {
      likesElement.innerHTML = `${item.likes} Likes`;
    }
  })
}