import React from 'react'

import styles from './PartyMember.module.scss'

const PartyMember = ({id, name, color, removeHandler}) => {

    const removeMemberHandler = (e) => {
        e.preventDefault()
        removeHandler(id);
    }

  return (
    <button className={styles["party-member"]} onClick={removeMemberHandler} id={id} style={{backgroundColor:color}}>
        <p>{name}</p>
    </button>
  )
}

export default PartyMember