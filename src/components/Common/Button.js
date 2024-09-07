import React from 'react';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
