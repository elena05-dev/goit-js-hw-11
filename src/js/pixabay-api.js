import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50047920-024bf2fadca75537663b51516';
export const getImagesByQuery = async query => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
