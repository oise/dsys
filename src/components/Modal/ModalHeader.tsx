import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

interface ModalHeaderProps {
  className?: string;
  children: string | ReactNode
}

export const ModalHeader: FC<ModalHeaderProps> = ({ children, className, ...props }) => {
  const cx = classNames({
    [styles['modalHeader']]: true,
    className
  });


  return <div className={cx} {...props}>{children}</div>;
};
