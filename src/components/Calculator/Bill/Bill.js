import React from "react";

import styles from "./Bill.module.scss";

import BillItem from "./BillItem/BillItem";
import Button from "@/components/UI/Button/Button";

const Bill = ({ party, items, editItem, removeItem, hideBill, showBill }) => {
  const removeItemHandler = (id) => {
    removeItem(id);
  };

  const editItemHandler = (id, item) => {
    editItem(id, item);
  };

  return (
    <div className={`${styles.bill} ${hideBill ? styles["bill--hide"] : ""}`}>
      <span className={styles.divider}></span>
      <div className={styles.bill__container}>
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            {items.map((item) => (
              <BillItem key={item.id} {...item} party={party} removeItem={removeItemHandler} editItem={editItemHandler} />
            ))}
          </div>
        </div>
      </div>
      {items.length > 0 && (
        <div className={styles["bill__hide-bill"]}>
          <Button color={'blue'} customClass={'small'} onClick={() => showBill()}>
            {hideBill ? "Mostrar cuenta" : "Esconder cuenta"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Bill;
