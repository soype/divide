import React, {useState, useEffect} from "react";

import styles from "./AddBillItem.module.scss";

const AddBillItem = ({ members, addItem, editedItem }) => {

    const [allSelected, setAllSelected] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(false);

  useEffect(() => {
      if(editedItem){
          setName(editedItem.name);
          setQuantity(editedItem.quantity);
          setPrice(editedItem.price);
          setSelectedMembers(editedItem.members);
      }
    }, [editedItem]);

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
        if(selectedMembers.length < 1 || quantity < 1 || price < 1){
          setError(true);
          return;
        }else{
          setError(false);
        }
        const item = {
          id: Math.random().toFixed(3),
          name: name,
          quantity: quantity,
          price: price,
          members: selectedMembers
        }
        addItem(item);
        // Clear items
        setName('');
        setQuantity('');
        setPrice('');
        setSelectedMembers([]);
        if(allSelected){
          setAllSelected(false);
        }
    }

    const nameHandler = (e) => {
      setName(e.target.value);
    }

    const priceHandler = (e) => {
      setPrice(e.target.value);
    }

    const quantityHandler = (e) => {
      setQuantity(e.target.value);
    }

  return (
    <form className={styles.addBillItem} onSubmit={submitHandler}>
      <h2>Agregar artículo</h2>
      <div className={styles.addBillItem__container}>
        <div className={styles.addBillItem__container__left}>
          <input type="text" name="itemName" placeholder="Nombre del artículo" onChange={nameHandler} value={name} required />
          <span></span>
          <div className={styles.addBillItem__list}>
            {members.map((member, index) => (
              <div key={index} className={styles.addBillItem__list__item}>
                <label htmlFor={`${member.name}-${member.id}`}>{member.name}</label>
                <input id={`${member.name}-${member.id}`} checked={selectedMembers.includes(member.id)} onChange={() => selectItemHandler(member.id)} type="checkbox" style={{ backgroundColor: member.color }} />  
              </div>
            ))}
            <div className={`${styles.addBillItem__list__item} ${styles.addBillItem__list__all} `}>
              <label htmlFor="all">Todos</label>
              <input id="all" type="checkbox" checked={allSelected} onChange={selectAllHandler} />
            </div>
          </div>
        </div>
        <div className={styles.addBillItem__container__right}>
          <div className={`${styles.addBillItem__price} ${styles.addBillItem__field}`}>
            <p>$ </p><input name="price" type="number" placeholder="0" value={price} onChange={priceHandler} required />
          </div>
          <div className={`${styles.addBillItem__quantity} ${styles.addBillItem__field}`}>
            <p>x </p><input name="quantity" type="number" placeholder="0" value={quantity} onChange={quantityHandler} required />
          </div>
          
          <button type="submit" className={styles.addBillItem__addButton}>Agregar</button>
        </div>
      </div>
      {error && <p className={styles.error}>Por favor, completá todos los campos</p>}
    </form>
  );
};

export default AddBillItem;
