import React, { FC } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

export interface ButtonProps {
  kind: 'primary' | 'secondary' | 'danger';
}

export const Button: FC<ButtonProps> = ({ children, kind, ...props }) => {
  const className = classNames({
    [styles.button]: true,
    [styles[kind]]: kind
  });

  return (
    <button className={className} {...props}>{children}</button>
  );
};

Button.defaultProps = {
  kind: 'primary'
};

