import React, { useState } from 'react';
import Gallery from './components/Gallery';
import Modal from 'react-modal';

const images = [
  // List of image URLs
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/300'
];

Modal.setAppElement('#root'); 

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);  
    setSelectedImage(null);
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <Gallery images={images} openModal={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <button onClick={closeModal}>Close</button>
        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </Modal>
    </div>
  );
};

export default App;
