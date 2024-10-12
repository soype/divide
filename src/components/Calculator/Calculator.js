"use client";

import React, { useState } from "react";

import Party from "@/components/Calculator/Party/Party";
import Bill from "@/components/Calculator/Bill/Bill";
import AddBillItem from "./Bill/AddBillItem/AddBillItem";
import Result from "./Result/Result";
import Button from "../UI/Button/Button";
import Modal from "./PartyModal/Modal";

import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [party, setParty] = useState([
    {
        "id": "0.196",
        "name": "Pedro",
        "email": "",
        "color": "#D1462F"
    },
    {
        "id": "0.319",
        "name": "Carla",
        "email": "",
        "color": "#0A81D1"
    },
    {
        "id": "0.276",
        "name": "Fede",
        "email": "",
        "color": "#FD8B51"
    },
    {
        "id": "0.801",
        "name": "Lina",
        "email": "",
        "color": "#D90368"
    }
]);
  const [items, setItems] = useState([
    {
        "id": "0.669",
        "name": "Carne",
        "quantity": "1",
        "price": "8000",
        "members": [
            "0.196",
            "0.319"
        ]
    },
    {
        "id": "0.298",
        "name": "Franui",
        "quantity": "3",
        "price": "3125",
        "members": [
            "0.196",
            "0.319"
        ]
    },
    {
        "id": "0.061",
        "name": "Pepsi",
        "quantity": "2",
        "price": "2500",
        "members": [
            "0.276",
            "0.801"
        ]
    },
    {
        "id": "0.670",
        "name": "Pan",
        "quantity": "1",
        "price": "1800",
        "members": [
            "0.276",
            "0.801"
        ]
    }
]);
  const [editedItem, setEditedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [hideBill, setHideBill] = useState(false);
  const [editMember, setEditMember] = useState();
  const [showModal, setShowModal] = useState(false);


  const showModalHandler = () => {
    setShowModal(true);
  };

  const addMemberHandler = (name, email, id, color) => {

    setEditMember(null);  
    let arrayEmpty = true;
    if (party.length >= 1) {
      arrayEmpty = false;
    }
    // Generate random background color
    const randomColor = () => {
      let colors = ["#D1462F", "#FD8B51", "#0A81D1", "#D90368", "#34a4b9"];
      const existingColors = party.map((member) => member.color);
      for (let i = 0; i < colors.length; i++) {
        if (existingColors.includes(colors[i])) {
          colors.splice(i, 1);
          i--;
        }
      }
      if (colors.length === 0) {
        colors = ["#D1461F", "#FD8B52", "#0A81D2", "#D90468", "##34a4b8"];
      }
      let randomIndex = Math.floor(Math.random() * colors.length);
      if (arrayEmpty) {
        return colors[randomIndex];
      } else {
        if (party[party.length - 1].color === colors[randomIndex]) {
          while (party[party.length - 1].color === colors[randomIndex]) {
            randomIndex = Math.floor(Math.random() * colors.length);
          }
          return colors[randomIndex];
        } else {
          return colors[randomIndex];
        }
      }
    };

    // Handle edit

    let newParty = [...party];

    if(!id){
      id = Math.random().toFixed(3);
    }
    if(!color){
      color = randomColor();
    }

    // Add member
    const newMember = {
      id: id,
      name: name,
      email: email,
      color: color
    }

    if(newParty.find((member) => member.id === id)){
      const index = newParty.findIndex((member) => member.id === id);
      newParty[index] = newMember;
    }else{
      newParty.push(newMember);
    }

    setParty(newParty);
  };

  const editMemberHandler = (id) => {
    setEditMember(party.find((member) => member.id === id));
    setShowModal(true);
    setShowResults(false);
  };

  const removeMemberHandler = (id) => {
    setParty(party.filter((member) => member.id !== id));
  };

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const removeItemHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItemHandler = (id, item) => {
    setEditedItem(item);
    setItems(items.filter((item) => item.id !== id));
  };

  const showBillHandler = () => {
    setHideBill(!hideBill);
  };

  const showResultsHandler = () => {
    setShowResults(true);
    setHideBill(true);
  };

  return (
    <div className={styles.calculator}>
      <h1>Divide</h1>
      {showModal && <div className={styles['modal-background']} >
        <Modal editMember={editMember} showModal={setShowModal} addMember={addMemberHandler} removeMember={removeMemberHandler}></Modal>
      </div>}
      <div className={styles.calculator__controls}>
        <Party party={party} showModal={showModalHandler} editMemberHandler={editMemberHandler} />
        <AddBillItem members={party} addItem={addItemHandler} editedItem={editedItem} />
      </div>
      <Bill party={party} items={items} removeItem={removeItemHandler} editItem={editItemHandler} hideBill={hideBill} showBill={showBillHandler} />
      <div className={styles.calculator__button}>
        <Button color={"blue"} customClass={"divide"} onClick={showResultsHandler}>Dividir!</Button>
      </div>
      {showResults && <Result items={items} members={party} />}
    </div>
  );
};

export default Calculator;
