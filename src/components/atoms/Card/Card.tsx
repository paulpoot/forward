import * as React from 'react';

import css from './Card.module.scss';

export type Props = {
  title: string;
  description: string;
  link: string;
};

const Card = ({ title, description, link }: Props) => {
  return (
    <a href={link} className={css.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  );
};

export default Card;
