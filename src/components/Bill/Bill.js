import React from 'react'

import styles from './Bill.module.scss'

import BillItem from './BillItem/BillItem'

const Bill = () => {

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
        {items.map((item, index) => (
            <BillItem key={index} {...item} />
        ))}
    </div>
  )
}

export default Bill