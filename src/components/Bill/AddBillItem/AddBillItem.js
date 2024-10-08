import React from 'react'

import styles from './AddBillItem.module.scss'

const AddBillItem = ({members}) => {

  return (
    <form className={styles.addBillItem}>
        <input type="text" placeholder="Item name" />
        <textarea placeholder="Item description"></textarea>
        <input type="number" placeholder="Item amount" />
        <input type="number" placeholder="Item price" />
        {members.map((member, index) => (
            <div key={index}>
                <input type="checkbox" placeholder={member.name} style={{ backgroundColor: member.color, opacity: 0.9 }} />
            </div>
        ))}
        <button type="submit">Add</button>
    </form>
  )
}

export default AddBillItem