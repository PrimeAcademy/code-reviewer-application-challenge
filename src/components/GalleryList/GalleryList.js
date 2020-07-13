import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';

class GalleryList extends Component {

  render() {
    return (
      <section>
        {
          this.props.pictures.map( arrayItem => 
            <GalleryItem info={arrayItem} 
                afterUpdate={this.props.getGalleryItems} />
          )
        }
      </section>
    );
  }
}

export default GalleryList;
