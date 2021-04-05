import { Fragment, useState, useEffect } from 'react';
import './App.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImages from './services/api';
import Button from './components/Button';
import Loader from './components/Loader';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const shouldRenderLoadMoreButton = images.length > 0;

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    loadImages();
  }, [searchQuery]);

  function loadImages() {
    console.log('Fetching');
    setIsLoading(true);

    fetchImages(searchQuery, currentPage)
      .then(newImages => {
        setImages([...images, ...newImages]);
        setCurrentPage(currentPage + 1);
      })
      .then(() => {
        currentPage > 0 &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }

  function onChangeQuery(searchQuery) {
    setSearchQuery(searchQuery);
    setCurrentPage(0);
    setImages([]);
  }

  return (
    <Fragment>
      <Searchbar onSubmit={searchQuery => onChangeQuery(searchQuery)} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {shouldRenderLoadMoreButton && <Button loadMore={() => loadImages()} />}
    </Fragment>
  );
};

export default App;

// ======CLASSES======
// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [images, setImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   const shouldRenderLoadMoreButton = images.length > 0;

//   useEffect(() => loadImages());

//   function loadImages() {
//     console.log('Fetching');
//     setIsLoading(true);

//     fetchImages(searchQuery, currentPage)
//       .then(newImages => {
//         setImages(images.push(newImages));
//         setCurrentPage(currentPage + 1);
//       })
//       .then(() => {
//         currentPage > 1 &&
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: 'smooth',
//           });
//       })
//       .catch(error => console.log(error))
//       .finally(() => setIsLoading(false));
//   }

//   function onChangeQuery(searchQuery) {
//     setSearchQuery(searchQuery);
//     setCurrentPage(1);
//     setImages([]);
//   }

//   return (
//     <Fragment>
//       <Searchbar onSubmit={searchQuery => onChangeQuery(searchQuery)} />
//       <ImageGallery images={images} onClick={() => {}} />
//       {isLoading && <Loader />}
//       {shouldRenderLoadMoreButton && <Button loadMore={() => loadImages()} />}
//     </Fragment>
//   );
// };

// export default App;
