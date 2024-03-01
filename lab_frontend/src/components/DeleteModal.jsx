import React, { useRef, useEffect } from 'react';
import { MdOutlineClose } from "react-icons/md";

function DeleteModal({ handleCloseModal, handleDelete, selectedDrugId }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleCloseModal]);

  return (
    <div onClick={handleCloseModal}>
      <div ref={modalRef} onClick={(event) => event.stopPropagation()} style={{backgroundColor: "white", border: "1px solid rgb(108,149,121)", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "1rem", alignItems: "center", width: "30vw", margin: "0 auto", position: "fixed", top: "0", right: "0", left: "0px" }}>
        <MdOutlineClose style={{ cursor: "pointer" }} onClick={handleCloseModal} />
        <p>Are you sure you want to delete this item?</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button style={{padding: "0.5rem 1rem", backgroundColor: "rgb(255,99,132)", border: "none", color: "white", cursor: "pointer"}} onClick={() => handleDelete(selectedDrugId)}>Yes</button>
          <button style={{padding: "0.5rem 1rem", backgroundColor: "rgb(108,149,121)", color: "white", border: "none", cursor: "pointer"}} onClick={handleCloseModal}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
