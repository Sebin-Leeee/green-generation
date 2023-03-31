import styles from './Contents.module.css'
import React from 'react';

const Content = ({ title, text, onClick }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p onClick={onClick}>{text}</p>
    </div>
  );
};

export default Content;