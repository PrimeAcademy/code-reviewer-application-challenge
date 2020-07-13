import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    galleryList: []
  }

  // When the component loads, get the gallery from the server 
  componentDidMount() {
    this.getGalleryItems();
  }

  // Get the gallery items from the server
  getGalleryItems = () => {
    Axios.get('/gallery')
      .then( response => {
        this.setState({
          galleryList: response.data,
        })
      })
      .catch( error => {
        alert(`Sorry, couldn't get gallery at this time. Try again later.`);
        console.log(`Error getting gallery`, error);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList pictures={this.state.galleryList} getGalleryItems={this.getGalleryItems}/>
      </div>
    );
  }
}

export default App;
