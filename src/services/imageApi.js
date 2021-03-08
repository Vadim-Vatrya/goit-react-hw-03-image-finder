import axios from 'axios';


const API_KEY = '19735813-38939a283ca61b34fac8c005d';
const BASE_URL = 'https://pixabay.com/api/';


axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
}

const fetchImages = async (search = '', page = 1) => {
  const { data } = await axios.get(
    `/?q=${search}&page=${page}&key=19735813-38939a283ca61b34fac8c005d&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default fetchImages;
