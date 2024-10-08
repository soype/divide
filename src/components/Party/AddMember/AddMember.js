'use client';

import React, {useState} from 'react'

const AddMember = ({addMember}) => {

  const [name, setName] = useState('');

  const addMemberHandler = (e) => {
      e.preventDefault()
      addMember(name);
      setName('');
  }

  return (
    <form onSubmit={addMemberHandler}>
        <input type="text" onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="Name"/>
    </form>
  )
}

export default AddMember