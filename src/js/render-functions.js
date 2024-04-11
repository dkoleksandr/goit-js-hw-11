import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export { createMarkup };
export { lightbox };
// export {  onClickImage };

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="item-card">
        <a class="gallery-link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" data-largeImage="${largeImageURL}" class="weather-icon">
            </a>
            <p class="likes">Likes <span>${likes}</span></p>
            <p class="views">Views ${views}</p>
            <p class="comments">Comments ${comments}</p>
            <p class="downloads">Downloads ${downloads}</p>
        </li>
    `
    )
    .join('');
}

const lightbox = new SimpleLightbox('.item-card a', {
    /* options */
    captionsData: 'alt'
  });

