import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  closeByBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) this.props.toggleModal();
  };

  render() {
    const { largeImageURL } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.closeByBackdrop}>
        <div className={styles.Modal}>
          <img className={styles.modalPic} src={largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};