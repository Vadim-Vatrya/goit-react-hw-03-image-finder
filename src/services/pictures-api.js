import axios from 'axios';


const API_KEY = '19735813-38939a283ca61b34fac8c005d';
const BASE_URL = 'https://pixabay.com/api/';


const fetchPictures = ({ searchQuery = '', page = 1, per_page = 12 }) => {
  return axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
    )
    .then(response => response.data.hits);
};
export default fetchPictures;
