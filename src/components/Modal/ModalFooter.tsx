import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

interface ModalFooterProps {
  className?: string;
  children: string | ReactNode
}

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, ...props }) => {
  const cx = classNames({
    [styles['modalFooter']]: true,
    className
  });

  return <div className={cx} {...props}>{children}</div>;
};
