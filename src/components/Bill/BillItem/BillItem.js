import React from "react";

import styles from "./BillItem.module.scss";

const BillItem = ({ name, description, amount, price, members }) => {
  return (
    <div className={styles.billItem}>
      <div className={styles.billItem__container}>
        <div className={styles.billItem__top}>
          <h3 className={styles.billItem__title}>{name}</h3>
        </div>
        <span className={styles.billItem__divider}></span>
        <div className={styles.billItem__bottom}>
          <div className={styles.billItem__numbers}>
            <p>
              <span className={styles.billItem__price}>{price}</span> - <span className={styles.billItem__amount}>x{amount}</span>
            </p>
          </div>
          <div className={styles.billItem__members}>
            {members.map((member, index) => (
              <div key={index} className={styles.billItem__member}>
                <span className={styles.billItem__member__name}>{member.name}</span>
                <span className={styles.billItem__member__color} style={{ backgroundColor: member.color }}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.billItem__total}>
        <span className={styles.billItem__total__amount}>{price * amount}</span>
      </div>
      <button className={styles.edit}></button>
      <button className={styles.delete}></button>
    </div>
  );
};

export default BillItem;
