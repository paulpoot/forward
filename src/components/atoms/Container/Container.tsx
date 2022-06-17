import type { ReactNode } from 'react';
import React from 'react';

import clsx from 'clsx';

import css from './Container.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  gutter?: boolean;
};

const Container = ({ children, className, gutter = true }: Props) => {
  return (
    <div className={clsx(css.container, { [css.gutter]: gutter }, className)}>
      {children}
    </div>
  );
};

export default Container;
