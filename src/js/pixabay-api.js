
// import { createMarkup } from './render-functions';

export { fetchData };



function fetchData(url, options = {}) {
  return fetch(`${url}?${options}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}
