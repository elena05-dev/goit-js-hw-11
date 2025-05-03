import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const searchQuery = event.target.elements['search-text'].value.trim();
  if (!searchQuery) {
    iziToast.warning({
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  try {
    const data = await getImagesByQuery(searchQuery);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching<br> your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#ff6b6b',
        color: 'white',
      });
      return;
    }
    createGallery(data.hits);
    form.reset();
  } catch (error) {
    iziToast.error({
      message: 'An error occurred while fetching data. Try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }

  form.reset();
});
