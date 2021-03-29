import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';

function GalleryList(props) {

  return (
    <section>
      {props.pictures.map((arrayItem) => (
        <GalleryItem
          info={arrayItem}
          afterUpdate={props.getGalleryItems}
        />
      ))}
    </section>
  );

}

export default GalleryList;
