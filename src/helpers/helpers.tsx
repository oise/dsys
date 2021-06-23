import React, { ReactNode } from 'react';
import styles from './helpers.module.scss';

export const ImageHelper = ()=> {
  return  <div className={styles.imageHelper}>
    <img src="https://placeholder.pics/svg/100x100" alt="Logo" />
  </div>
}

export const FormHelper = ({children}:{children:ReactNode}) => {
  return <div className={styles.formHelper}>{children}</div>
}

export const ButtonGroupHelper = ({children}:{children:ReactNode})=> {
  return <div className={styles.buttonGroupHelper}>{children}</div>
}
