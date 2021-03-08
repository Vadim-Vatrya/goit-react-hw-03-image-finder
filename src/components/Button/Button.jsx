import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ uploadMorePhotos }) => {
  return (
    <button className={styles.Button} type="button" onClick={() => uploadMorePhotos()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  uploadMorePhotos: PropTypes.func.isRequired,
};

export default Button;