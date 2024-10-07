'use client';

import React, {useState} from 'react'

const AddMember = ({addMember}) => {

  const [name, setName] = useState('');

  const addMemberHandler = (e) => {
      e.preventDefault()

      addMember(name);
  }

  return (
    <form onSubmit={addMemberHandler}>
        <input type="text" onChange={(e) => setName(e.currentTarget.value)} placeholder="Name"/>
    </form>
  )
}

export default AddMember