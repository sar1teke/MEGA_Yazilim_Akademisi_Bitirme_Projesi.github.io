import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImageCard = ({ image, title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="image-card">
      <img
        src={image}
        alt={description}
        className="image"
        onClick={handleModalOpen}
        style={{ width: '430px', height: '250px', borderRadius: '8px' }}
      />

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
      <p>{title}</p>
    </div>
  );
};
export default ImageCard;






