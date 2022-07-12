import * as React from 'react';

import clsx from 'clsx';

import type { HeadingLevel } from '@typings/global/heading';

import css from './Heading.module.scss';

export type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel;
  className?: string;
  spacing?: 'sm' | 'default';
  color?: 'primary';
  align?: 'left' | 'center' | 'right';
};

const Heading = ({
  color = 'primary',
  spacing = 'default',
  align,
  ...props
}: Props) => {
  const elementProps = React.useMemo(
    () => ({
      ...props,
      className: clsx(props.className, css[color], css[align || ''], {
        [css['spacing-small']]: spacing === 'sm',
      }),
      level: undefined,
      children: undefined,
    }),
    [props, color, spacing, align],
  );

  return React.createElement(props.level, elementProps, props.children);
};

export default Heading;
