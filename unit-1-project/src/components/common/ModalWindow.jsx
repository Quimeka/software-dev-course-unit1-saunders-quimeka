import React from 'react';

export default function ModalWindow({message, onClose}) {

    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h4>{message}</h4>
            <button className="modal-close" onClick={onClose}>Close</button>
          </div>
        </div>
    );
}