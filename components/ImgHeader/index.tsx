import React from 'react';
import styles from './ImgHeader.module.scss';

export interface IImgHeaderProps {
  overlay?: string;
  imgUrl: string;
}

const ImgHeader: React.FC<IImgHeaderProps> = ({ overlay = '', imgUrl }) => {
  return (
    <>
      <div
        className={styles.imgContainer}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <header className={styles.header}>
        <h1>{overlay}</h1>
      </header>
    </>
  );
};

export default ImgHeader;
