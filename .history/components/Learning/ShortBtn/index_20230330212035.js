import React, { useState } from 'react';
import Content1 from '../Content1';
import Content2 from '../Content2';
import Content3 from '../Content3';

const ShortBtn = ({ onNext, onPrev }) => {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [<Content1 />, <Content2 />, <Content3 />];

  const handleNext = () => {
    setContentIndex((contentIndex + 1) % contents.length);
  };

  const handleBack = () => {
    setContentIndex((contentIndex - 1 + contents.length) % contents.length);
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      {contents[contentIndex]}
    </div>
  );
};

export default ShortBtn;