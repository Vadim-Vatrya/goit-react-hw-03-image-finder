import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handelSearch = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;

    if (search.trim() === '') {
      return toast.error('Please enter something to start your search!');
    }

    this.props.onSubmitForm(search);
    this.reset();
  };

  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
<header className={styles.Searchbar}>
  <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
    <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}></span>
    </button>

    <input
     onChange={this.handelSearch}
     value={search}
      className={styles.SearchFormInput}
      type="text"
      
      placeholder="Search images and photos"
    />
  </form>
</header>
 );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;