import React from 'react';

import styles from './Button.module.scss'

const Button = ({children, color, onClick, pointer, customClass }) => {
  return (
    <div className={styles.wrapper}>
        <button className={`${styles.button} ${color && styles[color]} ${customClass && styles[customClass]}`} pointer={pointer} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button