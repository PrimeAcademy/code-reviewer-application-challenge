import { useState } from 'react';
import Axios from 'axios';
import './GalleryItem.css';

function GalleryItem(props) {
  // state
  let [toggle, setToggle] = useState(true);

  const getDisplayElement = () => {
    if(toggle) {
      return <img src={props.info.path} alt='' />;
    } else {
      return <p>{props.info.description}</p>;
    }
  };

  // Toggle between showing the image and description
  const toggleDisplay = () => {
    setToggle(!toggle);
  };

  const likeImage = () => {
    console.log(`In like image...`);
    Axios.put(`/gallery/like/${props.info.id}`)
      .then((response) => {
        props.afterUpdate();
      })
      .catch((error) => {
        alert(`Sorry, couldn't update gallery at this time. Try again later.`);
        console.log(`Error liking image`, error);
      });
  };

  return (
    <div className='GalleryItem' key={props.info.id}>
      <div onClick={toggleDisplay} className='GalleryDisplay'>
        {getDisplayElement()}
      </div>
      <button onClick={likeImage}>Love It!</button>
      <p>Likes: {props.info.likes}</p>
    </div>
  );
}

export default GalleryItem;
