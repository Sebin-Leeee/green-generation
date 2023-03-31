import styles from './Contents.module.css'
import React, { useState } from 'react';
import background1 from '../../public/Background1.png';
import background2 from '../../public/learning/Background2.png';


const pages = [
  {
    title: 'Page 1',
    subtitle: 'This is the first page',
    backgroundImage: background1,
    contents: [
      {
        title: 'Content 1',
        text: 'This is the first content for page 1',
        onClick: () => alert('Clicked content 1 for page 1'),
      },
      {
        title: 'Content 2',
        text: 'This is the second content for page 1',
        onClick: () => alert('Clicked content 2 for page 1'),
      },
    ],
  },
  {
    title: 'Page 2',
    subtitle: 'This is the second page',
    backgroundImage: background2,
    contents: [
      {
        title: 'Content 1',
        text: 'This is the first content for page 2',
        onClick: () => alert('Clicked content 1 for page 2'),
      },
      {
        title: 'Content 2',
        text: 'This is the second content for page 2',
        onClick: () => alert('Clicked content 2 for page 2'),
      },
    ],
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const { title, subtitle, backgroundImage, contents } = pages[currentPage];

  return (
    <div style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover', height: '100vh' }}>
      <div className = {styles.container}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {contents.map((content, index) => (
          <Content key={index} title={content.title} text={content.text} onClick={content.onClick} />
        ))}
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={currentPage === pages.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
