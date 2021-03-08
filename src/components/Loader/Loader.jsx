import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Loader.module.css';


const LoaderPage = () => {
  return (
    <div className={styles.loader}>
      <Loader 
      type="Puff" 
      color="#00BFFF" 
      height={100} 
      width={100} 
      timeout={2000}
      />
    </div>
  );
};

export default LoaderPage;