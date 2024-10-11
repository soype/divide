import React, { useState, useEffect } from "react";

import formatNumber from "@/lib/FormatNumber";

import Button from "@/components/UI/Button/Button";

import styles from "./BillItem.module.scss";

const BillItem = ({ id, name, quantity, price, members, party, removeItem, editItem }) => {
  const [matchingMembers, setMatchingMembers] = useState([]);

  useEffect(() => {
    const newList = party.filter((member) => members.includes(member.id));
    setMatchingMembers(newList);
  }, [party]);

  const removeItemHandler = (e) => {
    removeItem(e.target.getAttribute("pointer"));
  };

  const editItemHandler = (e) => {
    const item = {
      name: name,
      quantity: quantity,
      price: price,
      members: members
    }
    editItem(e.target.getAttribute("pointer"), item);
  };

  return (
    <div className={styles.billItem} id={id}>
      <div className={styles.billItem__container}>
        <div className={styles.billItem__container__left}>
          <h3>
            {name} x{quantity}
          </h3>
          <span className={styles.divider}></span>
          <div className={styles.billItem__list}>
            {matchingMembers.map((member, index) => (
              <div key={index} className={styles.billItem__list__member} style={{ backgroundColor: member.color }}>
                <span className={styles.billItem__member__name}>{member.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.billItem__container__right}>
          <div className={`${styles.billItem__price} ${styles.billItem__field}`}>$ {formatNumber(price * quantity)}</div>
          <div className={styles.billItem__buttons}>
            <Button color={'yellow'} customClass={'small'} onClick={editItemHandler} pointer={id}>Editar</Button>
            <Button color={'red'} customClass={'small'} onClick={removeItemHandler} pointer={id}>Borrar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillItem;
