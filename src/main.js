

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { fetchData } from './js/pixabay-api';
import { createMarkup, lightbox } from './js/render-functions';
// import { onClickImage } from './js/render-functions';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43338805-0211d3d1e83cb5c165622303b';

const searchForm = document.querySelector('.js-search-form');

const gallery = document.querySelector('.gallery');

// gallery.addEventListener('click', onClickImage);

let search;

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  search = event.target.elements.search.value;

  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetchData(BASE_URL, params)
    .then(data => {
      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
        return;
      }

      console.log([...data.hits]);
      // createMarkup([...data.hits]);
      gallery.insertAdjacentHTML('beforeend', createMarkup([...data.hits]));
      lightbox.refresh();

  
    })
    .catch(error => alert(error));
}

