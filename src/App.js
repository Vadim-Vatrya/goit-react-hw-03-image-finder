import { Component } from 'react';


import fetchImages from './services/imageApi';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import LoaderPage from './components/Loader';
import Modal from './components/Modal';

import styles from './App.module.css';


class App extends Component {
  state = {
    search: '',
    page: 1,
    imgArray: [],
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    error: null,
  };

  onSubmitForm = async data => {
    this.setState({ search: data, page: 1, isLoading: true, error: null });

    try {
      const request = await fetchImages(data);
      this.setState(({ page }) => ({ imgArray: [...request], page: page + 1 }));
      this.scrollImg();
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  uploadMorePhotos = async () => {
    const { search, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const request = await fetchImages(search, page);
      this.setState(({ imgArray, page }) => ({
        imgArray: [...imgArray, ...request],
        page: page + 1,
      }));
      this.scrollImg();
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scrollImg = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onClickImage = largeImageURL => {
    this.setState({ largeImageURL: largeImageURL });
    this.toggleModal();
  };

  render() {
    const {
      imgArray,
      isLoading,
      showModal,
      largeImageURL,
      error,
      search,
    } = this.state;
    const imgFound = imgArray.length > 0 && !error;
    const imgNotFound = search && imgArray.length === 0 && !error && !isLoading;

    return (
      <div className={styles.App}>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        {error && (
          <p className={styles.error}>Whoops, something went wrong. Try again.</p>
        )}
        {imgFound && (
          <>
            <ImageGallery
              onClickImage={this.onClickImage}
              imgArray={imgArray}
            />
            {!isLoading && <Button uploadMorePhotos={this.uploadMorePhotos} />}
            {isLoading && <LoaderPage />}
            {showModal && (
              <Modal
                largeImageURL={largeImageURL}
                toggleModal={this.toggleModal}
              />
            )}
          </>
        )}
        {imgNotFound && (
          <p className={styles.error}>
            No results were found for your search. Try again.
          </p>
        )}
      </div>
    );
  }
}

export default App;