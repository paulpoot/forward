import * as React from 'react';

import clsx from 'clsx';

import css from './Text.module.scss';

type TextVariant = 'body' | 'code' | 'label';

export type Props = {
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'lg' | 'xl';
  variant?: 'body' | 'code' | 'label';
  color?: 'primary' | 'secondary';
  align?: 'left' | 'center' | 'right';
  className?: string;
};

const elementMap: Record<TextVariant, React.ElementType> = {
  code: 'code',
  body: 'p',
  label: 'span',
};

const Text = ({
  children,
  size = 'lg',
  variant = 'body',
  color = 'primary',
  className = '',
  align,
  ...props
}: Props) => {
  const Element: React.ElementType = elementMap[variant];

  return (
    <Element
      className={clsx(
        css.text,
        css[size],
        css[color],
        css[align || ''],
        {
          [css.code]: variant === 'code',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Text;
