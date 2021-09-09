import likedIconimg from '../../img/heart-icon-liked.png'

const liked = (id) => {
  document.getElementById(`${id}`).src = `${likedIconimg}`;
  const likesInfo = document.getElementById(`likes-${id}`);
  likesInfo.innerHTML = `${Number(likesInfo.innerHTML.slice(0,2)) + 1} likes`;
  console.log(Number(likesInfo.innerHTML.slice(0,2)));
}

export default liked;