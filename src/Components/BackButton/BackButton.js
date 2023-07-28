import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <p className='mx-5 my-2 flex items-center bg-pink-200 rounded-md max-w-fit px-2' onClick={handleGoBack}>
      <span style={{
        transform: 'scaleX(-1)',
        display: 'inline-block',
        writingMode: 'horizontal-tb', // Ensure the arrow remains horizontal after the flip
      }} className='text-2xl text-secondary'>➔</span> Back
    </p>
  );
};


export default BackButton;
