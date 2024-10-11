import React from 'react';

import styles from './Button.module.scss'

const Button = ({children, color, onClick, pointer, customClass }) => {
  return (
    <div className={`${styles.wrapper} ${styles[customClass]}`}>
        <button className={`${styles.button} ${color && styles[color]}`} pointer={pointer} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button