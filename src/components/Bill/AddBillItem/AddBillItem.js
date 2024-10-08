import React from "react";

import styles from "./AddBillItem.module.scss";

const AddBillItem = ({ members }) => {
  return (
    <form className={styles.addBillItem}>
      <div className={styles.addBillItem__container}>
        <div className={styles.addBillItem__container__left}>
          <input type="text" placeholder="Item name" required />
          <span></span>
          <div className={styles.addBillItem__list}>
          {members.map((member, index) => (
            <div key={index} className={styles.addBillItem__list__item}>
              <label>{member.name}</label>
              <input type="checkbox" style={{ backgroundColor: member.color }} />
            </div>
          ))}
          </div>
        </div>
        <div className={styles.addBillItem__container__right}>
          <input type="number" placeholder="Item price" required />
          <input type="number" placeholder="Item amount" required />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBillItem;
