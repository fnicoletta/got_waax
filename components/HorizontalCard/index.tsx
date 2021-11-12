import React from 'react';
import styles from './HorizontalCard.module.scss';
import Image from 'next/image';

export interface IHorizontalCardProps {
  title: string;
  paragraphs: string[];
  btnName?: string;
  img: string;
}

const HorizontalCard: React.FC<IHorizontalCardProps> = ({
  title,
  paragraphs,
  btnName = 'More Info',
  img,
}) => {
  return (
    <div className={styles.horizontalCard}>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        {paragraphs?.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        <button className={styles.btnRed}>{btnName}</button>
      </div>
      <Image src={img} width="600" height="600" />
    </div>
  );
};

export default React.memo(HorizontalCard);
