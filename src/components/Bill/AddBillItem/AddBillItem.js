import React, {useState} from "react";

import styles from "./AddBillItem.module.scss";

const AddBillItem = ({ members }) => {

    const [allSelected, setAllSelected] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectAllHandler = () => {
        setAllSelected(!allSelected);
        if(!allSelected){
            setSelectedMembers(members.map(member => member.id));
        }else{
            setSelectedMembers([]);
        }
    }

    const selectItemHandler = (id) => {
        if(selectedMembers.includes(id)){
          const newMembers = selectedMembers.filter(item => item !== id);
            setSelectedMembers(newMembers);
            if(newMembers.length < 1){
              setAllSelected(false);
            }
        }else{
          const newMembers = [...selectedMembers, id]
            setSelectedMembers(newMembers);
            if(newMembers.length == members.length){
              setAllSelected(true);
            }
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

  return (
    <form className={styles.addBillItem} onSubmit={submitHandler}>
      <div className={styles.addBillItem__container}>
        <div className={styles.addBillItem__container__left}>
          <input type="text" placeholder="Item name" required />
          <span></span>
          <div className={styles.addBillItem__list}>
            {members.map((member, index) => (
              <div key={index} className={styles.addBillItem__list__item}>
                <label htmlFor={`${member.name}-${member.id}`}>{member.name}</label>
                <input id={`${member.name}-${member.id}`} checked={selectedMembers.includes(member.id)} onChange={() => selectItemHandler(member.id)} type="checkbox" style={{ backgroundColor: member.color }} />  
              </div>
            ))}
            <div className={`${styles.addBillItem__list__item} ${styles.addBillItem__list__all} `}>
              <label htmlFor="all">All</label>
              <input id="all" type="checkbox" checked={allSelected} onChange={selectAllHandler} />
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
