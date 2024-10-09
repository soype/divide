import React, { useState } from 'react'

import styles from './Bill.module.scss'

import BillItem from './BillItem/BillItem'
import AddBillItem from './AddBillItem/AddBillItem'

const Bill = ({party}) => {

    const [items, setItems] = useState([
        {
            name: 'Carne',
            quantity: 2,
            price: 3500,
            members: [1]
        }
    ])

    const addItemHandler = (item) => {
        setItems([...items, item]);
    }

  return (
    <div className={styles.bill}>
        <AddBillItem members={party} addItem={addItemHandler} />
        <span className={styles.divider}></span>
        <div className={styles.bill__container}>
        {items.map((item, index) => (
            <BillItem key={index} {...item} party={party} />
        ))}
        </div>
    </div>
  )
}

export default Bill