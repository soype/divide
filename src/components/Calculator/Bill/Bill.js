import React, { useState } from 'react'

import styles from './Bill.module.scss'

import BillItem from './BillItem/BillItem'
import AddBillItem from './AddBillItem/AddBillItem'

const Bill = ({party, items, editItem, removeItem}) => {

    const removeItemHandler = (id) => {
        removeItem(id);
    }

    const editItemHandler = (id, item) => {
        editItem(id, item);
    }

  return (
    <div className={styles.bill}>
        {/* <AddBillItem members={party} addItem={addItemHandler} editedItem={editedItem} /> */}
        <span className={styles.divider}></span>
        <div className={styles.bill__container}>
        {items.map((item) => (
            <BillItem key={item.id} {...item} party={party} removeItem={removeItemHandler} editItem={editItemHandler} />
        ))}
        </div>
    </div>
  )
}

export default Bill