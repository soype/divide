import React, { useState } from 'react'

import styles from './Bill.module.scss'

import BillItem from './BillItem/BillItem'
import AddBillItem from './AddBillItem/AddBillItem'

const Bill = ({party}) => {

    const [items, setItems] = useState([])

    const [editedItem, setEditedItem] = useState(null);

    const addItemHandler = (item) => {
        setItems([...items, item]);
    }

    const removeItemHandler = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const editItemHandler = (id, item) => {
        setEditedItem(item);
        setItems(items.filter(item => item.id !== id));
    }

  return (
    <div className={styles.bill}>
        <AddBillItem members={party} addItem={addItemHandler} editedItem={editedItem} />
        <span className={styles.divider}></span>
        <div className={styles.bill__container}>
        {items.map((item, index) => (
            <BillItem key={index} {...item} party={party} removeItem={removeItemHandler} editItem={editItemHandler} />
        ))}
        </div>
    </div>
  )
}

export default Bill