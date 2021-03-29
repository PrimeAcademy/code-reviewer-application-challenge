import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Axios from 'axios';
import './App.css';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  // When the component loads, get the gallery from the server 
  useEffect(() => {
    getGalleryItems();
  });

  const getGalleryItems = () => {
    Axios.get('/gallery')
      .then( response => {
        setGalleryList(response.data);
      })
      .catch( error => {
        alert(`Sorry, couldn't get gallery at this time. Try again later.`);
        console.log(`Error getting gallery`, error);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList pictures={galleryList} getGalleryItems={getGalleryItems}/>
      </div>
    );
}

export default App;
