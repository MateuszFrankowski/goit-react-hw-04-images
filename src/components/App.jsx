import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import css from './App.module.css';
import { fetchImagesWithQuery } from './Api/Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import React, { useEffect, useState } from 'react';
axios.defaults.baseURL = 'https://pixabay.com/api';
export const App = () => {
  const [images, setImages] = useState([]);
  const [pageNr, setPageNr] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [activeImageId, setActiveImageId] = useState(0);
  const handleEsc = event => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  };
  const hideModal = event => {
    if (event.target.nodeName !== 'IMG') {
      setShowModal(false);
    }
  };

  const handleSubmit = query => {
    setSearchQuery(query);
    setPageNr(1);
  };
  const handlemodal = evt => {
    const { id } = evt.target;
    setActiveImageId(Number(id));
    setShowModal(true);
  };
  const handleLoadMore = () => {
    setPageNr(pageNr + 1);
  };
  const handleImagesRequest = async (searchQuery, pageNr) => {
    if (!searchQuery) return;
    setIsLoading(true);
    try {
      const fetchData = await fetchImagesWithQuery(searchQuery, pageNr);
      const { newImages } = fetchData;
      const { totalHits } = fetchData;
      if (pageNr > 1) {
        setImages(images.concat(newImages));
      } else {
        setImages(newImages);
      }
      setTotalHits(totalHits);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleImagesRequest(searchQuery, pageNr);
  }, [searchQuery, pageNr]);
  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false);
    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, []);

  {
    const activeImage = images.find(({ id }) => activeImageId === id);
    const { largeImageURL, webformatURL } = activeImage || {};

    return (
      <div className={css.App}>
        <Searchbar onSubmit={handleSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} onClick={handlemodal} />
        )}
        {!isLoading && images.length < totalHits && (
          <Button onClick={handleLoadMore} />
        )}
        {showModal && (
          <Modal
            onClick={hideModal}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
};
