export const POSTLikes = () => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aliNSyHfj9kbhiXrqKsy/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: '1',
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    })
  .then((response) => response.text()).then((json) => console.log(json))
}