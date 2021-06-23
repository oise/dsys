import React, { FC } from 'react';
import styles from './label.module.scss';


export interface LabelProps {

}

export const Label: FC<LabelProps> = ({ children, ...props }) => <label className={styles.label} {...props}>{children}</label>;
