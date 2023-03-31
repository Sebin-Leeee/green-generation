import React from 'react';

const ShortBtn = ({ onNext, onPrev }) => {
  return (
    <div>
      <button onClick={onPrev}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default ShortBtn;