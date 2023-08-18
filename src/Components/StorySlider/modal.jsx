import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 transition-opacity" onClick={onClose}>
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="z-50 max-w-md w-full p-4 relative bg-white rounded-lg shadow-lg">

        <button
          onClick={onClose}
          className="px-4 py-2 absolute right-2 top-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
          X
        </button>

          {children}
      </div>
    </div>
  );
};

export default Modal;
