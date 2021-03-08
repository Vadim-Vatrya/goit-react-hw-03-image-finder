import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ webformatURL, tags, onClickImage }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img 
      src={webformatURL} 
      alt={tags} 
      onClick={onClickImage}
      className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;