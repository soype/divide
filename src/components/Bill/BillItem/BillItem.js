import React, { useState, useEffect } from "react";

import styles from "./BillItem.module.scss";

const BillItem = ({ id, name, quantity, price, members, party, removeItem, editItem }) => {
  
  const [matchingMembers, setMatchingMembers] = useState([]);

  useEffect(() => {
    const newList = party.filter((member) => members.includes(member.id));
    setMatchingMembers(newList);
  }, [party]);

  const removeItemHandler = (e) => {
    removeItem(e.target.getAttribute('pointer'))
  }

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
          <div className={`${styles.billItem__price} ${styles.billItem__field}`}>$ {price * quantity}</div>
          <div className={styles.billItem__buttons}>
            <button className={styles.billItem__buttons__edit} pointer={id}>Editar</button>
            <button className={styles.billItem__buttons__delete} pointer={id} onClick={removeItemHandler}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillItem;
