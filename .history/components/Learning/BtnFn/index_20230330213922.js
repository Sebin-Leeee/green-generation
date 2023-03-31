import { useState } from 'react';
import styles from './BtnFn.module.css'
import Content1 from '../Content1';
import Content2 from '../Content2';
import Content3 from '../Content3';
import ShortBtn from '../ShortBtn';

const ParentComponent = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [<Content1 />, <Content2 />, <Content3 />];

  const handleNext = () => {
    setContentIndex((contentIndex + 1) % contents.length);
  };

  const handleBack = () => {
    setContentIndex((contentIndex - 1 + contents.length) % contents.length);
  };

  return (
    <>
      {contents[contentIndex]}
      <ShortBtn onNext={handleNext} onBack={handleBack} />
    </>
  );
};

export default ParentComponent;