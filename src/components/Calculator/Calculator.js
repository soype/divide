"use client";

import React, { useState } from "react";

import Party from "@/components/Calculator/Party/Party";
import Bill from "@/components/Calculator/Bill/Bill";
import AddBillItem from "./Bill/AddBillItem/AddBillItem";
import Result from "./Result/Result";

import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [party, setParty] = useState([
    {
        "id": 1,
        "name": "Pedro",
        "color": "#FD8B51"
    },
    {
        "id": 2,
        "name": "Ale",
        "color": "#34a4b9"
    },
    {
        "id": 3,
        "name": "Ivo",
        "color": "#0A81D1"
    }
]);
  const [items, setItems] = useState([
    {
      id: "0.168",
      name: "Carne",
      quantity: "1",
      price: "3000",
      members: [1],
    },
    {
      id: "0.197",
      name: "Vino",
      quantity: "1",
      price: "3000",
      members: [2],
    },
    {
      id: "0.753",
      name: "Fideos",
      quantity: "1",
      price: "3000",
      members: [3],
    },
  ]);
  const [editedItem, setEditedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [hideBill, setHideBill] = useState(false);

  const addMemberHandler = (name) => {
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
    if (!arrayEmpty) {
      setParty([...party, { id: party[party.length - 1].id + 1, name: name, color: randomColor() }]);
    } else {
      setParty([{ id: 1, name: name, color: randomColor() }]);
    }
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
      <div className={styles.calculator__controls}>
        <Party party={party} addMemberHandler={addMemberHandler} removeMemberHandler={removeMemberHandler} />
        <AddBillItem members={party} addItem={addItemHandler} editedItem={editedItem} />
      </div>
      <Bill party={party} items={items} removeItem={removeItemHandler} editItem={editItemHandler} hideBill={hideBill} showBill={showBillHandler} />
      <button className={styles.calculator__button} onClick={showResultsHandler}>
        Divide!
      </button>
      {showResults && <Result items={items} members={party} />}
    </div>
  );
};

export default Calculator;
