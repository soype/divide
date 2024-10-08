import React, {useState} from "react";

import styles from "./AddBillItem.module.scss";

const AddBillItem = ({ members }) => {

    const [allSelected, setAllSelected] = useState(true);
    const [selectedItems, setSelectedItems] = useState([]);

    const selectAllHandler = () => {
        setAllSelected(!allSelected);
        if(allSelected){
            setSelectedItems(members.map(member => member.id));
        }else{
            setSelectedItems([]);
        }
    }

    const selectItemHandler = (id) => {
        if(selectedItems.includes(id)){
            setSelectedItems(selectedItems.filter(item => item !== id));
        }else{
            setSelectedItems([...selectedItems, id]);
        }
    }

  return (
    <form className={styles.addBillItem}>
      <div className={styles.addBillItem__container}>
        <div className={styles.addBillItem__container__left}>
          <input type="text" placeholder="Item name" required />
          <span></span>
          <div className={styles.addBillItem__list}>
            {members.map((member, index) => (
              <div key={index} className={styles.addBillItem__list__item}>
                <label for={`${member.name}-${member.id}`}>{member.name}</label>
                <input id={`${member.name}-${member.id}`} checked={selectedItems.includes(member.id)} onClick={() => selectItemHandler(member.id)} type="checkbox" style={{ backgroundColor: member.color }} />  
              </div>
            ))}
            <div className={`${styles.addBillItem__list__item} ${styles.addBillItem__list__all} `}>
              <label for="all">All</label>
              <input id="all" type="checkbox" onClick={selectAllHandler} />
            </div>
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
