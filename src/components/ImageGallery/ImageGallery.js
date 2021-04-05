import { Fragment } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = props => {
  const { images } = props;
  return (
    <Fragment>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id}></ImageGalleryItem>
        ))}
      </ul>
    </Fragment>
  );
};

export default ImageGallery;

// =======CLASSES======
// import { Component, Fragment } from 'react';
// class ImageGallery extends Component {
//   render() {
//     const { images } = this.props;
//     return (
//       <Fragment>
//         <ul className="ImageGallery">
//           {images.map(image => (
//             <ImageGalleryItem image={image} key={image.id}></ImageGalleryItem>
//           ))}
//         </ul>
//       </Fragment>
//     );
//   }
// }
