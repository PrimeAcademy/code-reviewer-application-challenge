import React, { Component } from 'react';
import Axios from 'axios';
import './GalleryItem.css';

class GalleryItem extends Component {

  state = {
    toggle: true,
  }

  // Return the correct element to show, based on the state
  getDisplayElement = () => {

    if (this.state.toggle) {
      return (
        <img src={this.props.info.path} alt="" />
      )
    } else {
      return (
        <p>{this.props.info.description}</p>
      )      
    }
  }

  // Toggle between showing the image and description
  toggleDisplay = () => {
    this.setState({
      toggle: ! this.state.toggle,
    })
  }

  // Add to likes counter
  likeImage = () => {
    console.log(`In like image...`);
    Axios.put(`/gallery/like/${this.props.info.id}`)
    .then( response => {
      this.props.afterUpdate();
    })
    .catch( error => {
      alert(`Sorry, couldn't update gallery at this time. Try again later.`);
      console.log(`Error liking image`, error);
    })
  }


  render() {
    return (
      <div className="GalleryItem" key={this.props.info.id}>
        <div onClick={this.toggleDisplay} className="GalleryDisplay">
          { this.getDisplayElement() }
        </div>
        <button onClick={this.likeImage}>Love It!</button>
        <p>Likes: {this.props.info.likes}</p>
      </div>
    );
  }
}

export default GalleryItem;
