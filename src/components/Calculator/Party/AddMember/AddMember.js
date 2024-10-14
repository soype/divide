'use client';

import React, {useState} from 'react'

import styles from './AddMember.module.scss'

const AddMember = ({addMember}) => {

  const [name, setName] = useState('');

  const addMemberHandler = (e) => {
      e.preventDefault()
      addMember(name);
      setName('');
  }

  return (
    <form className={styles.form} onSubmit={addMemberHandler}>
        <button className={styles['form__submit']}>Agregar</button>
    </form>
  )
}

export default AddMember