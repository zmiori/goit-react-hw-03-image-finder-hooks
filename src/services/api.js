import axios from 'axios';

const API_KEY = '19908670-1dd1b8415290a1f574a86bd8e';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horisontal',
  per_page: 12,
};

const fetchImages = async (searchQuery, currentPage) => {
  try {
    const { data } = await axios.get('', {
      params: { q: searchQuery, page: currentPage + 1 },
    });

    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default fetchImages;
