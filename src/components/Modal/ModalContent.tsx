import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

interface ModalContentProps {
  className?: string;
  children: string | ReactNode
}

export const ModalContent: FC<ModalContentProps> = ({ children, className, ...props }) => {
  const cx = classNames({
    [styles['modalContent']]: true,
    className
  });

  return <div className={cx} {...props}>{children}</div>;
};
