import React from 'react'

import styles from './Bill.module.scss'

import BillItem from './BillItem/BillItem'
import AddBillItem from './AddBillItem/AddBillItem'

const Bill = ({party}) => {

    const items = [
        {
            name: "Item 1",
            description: "Descripción del item 1",
            amount: 3,
            price: 100,
            members: [
                {
                    name: "Pedro",
                    color: "#ff0000"
                },
                {
                    name: "Juan",
                    color: "#00ff00"
                }
            ]
        }
    ]

  return (
    <div className={styles.bill}>
        <AddBillItem members={party} />
        {items.map((item, index) => (
            <BillItem key={index} {...item} />
        ))}
    </div>
  )
}

export default Bill