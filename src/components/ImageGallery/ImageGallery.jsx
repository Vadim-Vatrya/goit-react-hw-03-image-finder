import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';




const ImageGallery = ({ imgArray, onClickImage }) => {
  return (
    imgArray.length > 0 && (
      <ul className={styles.ImageGallery}>
        {imgArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClickImage={() => onClickImage(largeImageURL)}
          />
        ))}
      </ul>
    )
  );
};

ImageGallery.propTypes = {
  imgArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
