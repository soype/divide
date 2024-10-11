import React from 'react'

import styles from './PartyMember.module.scss'

const PartyMember = ({id, name, color, editMember}) => {

    const editMemberHandler = (e) => {
        e.preventDefault()
        editMember(id);
    }

  return (
    <div className={styles["party-member"]} onClick={editMemberHandler} id={id} style={{backgroundColor:color}}>
        <p>{name}</p>
    </div>
  )
}

export default PartyMember