import React from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalComponent = ({setModalIsOpen, modalIsOpen, result}) => {
    return (
              <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                <h2>{result}</h2>
              </Modal>
  )
}

export default ModalComponent