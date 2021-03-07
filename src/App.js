import React, { Component } from 'react';
import SearchBar from './components/Searchbar/SearchBar';

import Api from './services/api-service';




class App extends Component {
state = {
  images: [],
  currentPage: 1,
  searchQuery: '',
  isLoading: false,
  error: null,

};

// key = '19735813-38939a283ca61b34fac8c005d';

componentDidMount()  {
  
};

componentDidUpdate(prevProps, prevState) {
  if(prevState.searchQuery !== this.state.searchQuery) {
    this.fetchGallery();
  }
}

onChangeQuery = query => {
  this.setState({searchQuery: query, currentPage: 1, images: [], error: null,});


}


fetchGallery = () => {
  const {currentPage, searchQuery} = this.state;
  const options = {searchQuery, currentPage};

this.setState({isLoading: true})

 Api.fetchGallery(options).then(hits => { 
            this.setState(prevState => ({
              images: [...prevState.images, ...hits] ,
              currentPage: prevState.currentPage + 1,
            }));
    }).catch(error => this.setState({error}))
.finally(() => this.setState({isLoading: false}))
}


render() {
  const {images, isLoading, error} = this.state;
  return (
    <div>
      {error && <h1>Error</h1>}

      <SearchBar onSubmit={this.onChangeQuery}/>
      
      <ul>{images.map(({id, webformatURL, tags}) =>
       <li key={id}>
          <img src={tags} alt={webformatURL} />
       </li>
       )}
       </ul>

       {isLoading && <h2> Загружаем ...</h2>}

       {images.length > 0 && !isLoading && 
       (<button 
          type='button' onClick={this.fetchGallery} >
          Load more
        </button>)
       }
    </div>
  )
    
}
}

export default App;
