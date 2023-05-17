import React, { useState } from 'react'
import ModalData from './ModalData';

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const showTheModal = () => setShowModal(true);
  const closeTheModal = () => setShowModal(false);


  return (
    <>
      <button onClick={showTheModal}>Show Popup</button>
      {showModal && <ModalData closeTheModal = {closeTheModal}/>}
    </>
  )
}

export default Modal
