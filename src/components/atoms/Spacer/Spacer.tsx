import * as React from 'react';

import clsx from 'clsx';

import css from './Spacer.module.scss';

type Size = 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export type Props = {
  size: Size;
  className?: string;
};

const Spacer = ({ size, className = '' }: Props) => {
  return <div className={clsx(css.spacer, css[`spacer-${size}`], className)} />;
};

export default Spacer;
