import React, { useState } from 'react'

import styles from './Bill.module.scss'

import BillItem from './BillItem/BillItem'
import AddBillItem from './AddBillItem/AddBillItem'

const Bill = ({party}) => {

    const [items, setItems] = useState([
        {
            name: "Item 1",
            quantity: 3,
            price: 100,
            members: [1, 2]
        }
    ])

    const addItemHandler = (item) => {
        setItems([...items, item]);
    }

  return (
    <div className={styles.bill}>
        <AddBillItem members={party} addItem={addItemHandler} />
        {items.map((item, index) => (
            <BillItem key={index} {...item} party={party} />
        ))}
    </div>
  )
}

export default Bill