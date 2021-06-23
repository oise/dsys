import React, { ChangeEventHandler, FC } from 'react';
import styles from './text-input.module.scss';

export interface TextInputProps {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const TextInput: FC<TextInputProps> = ({ ...props }) => <input className={styles.input} {...props}/>;
