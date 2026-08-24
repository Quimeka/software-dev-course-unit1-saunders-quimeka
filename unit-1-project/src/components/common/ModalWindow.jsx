import React from 'react';

export default function ModalWindow({message, onClose}) {
  //display modal window and message passed from current page
    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 id="modal-message">Message:</h3>
            <h4>{message}</h4>
            <button className="closeButton" onClick={onClose}>Close</button>
          </div>
        </div>
    );
}