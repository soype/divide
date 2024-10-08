'use client';

import React, { useState } from "react";

import AddMember from "./AddMember/AddMember";
import PartyMember from "./PartyMember/PartyMember";

import styles from "./Party.module.scss";

const Party = () => {
  const [party, setParty] = useState([
    {
      id: 1,
      name: "Pedro",
      color: "#FD8B51",
    },
  ]);

  const addMemberHandler = (name) => {
    let arrayEmpty = true;
    if(party.length >= 1){
      arrayEmpty = false;
    }
    // Generate random background color
    const randomColor = () => {
      let colors = ["#D1462F", "#FD8B51", "#0A81D1", "#D90368", "#257180"];
      const existingColors = party.map((member) => member.color);
      for (let i = 0; i < colors.length; i++) {
        if (existingColors.includes(colors[i])) {
          colors.splice(i, 1);
          i--;
        }
      }
      if(colors.length === 0){
        colors = ["#D1461F", "#FD8B52", "#0A81D2", "#D90468", "#257280"];
      }
      let randomIndex = Math.floor(Math.random() * colors.length);
      if(arrayEmpty){
        return colors[randomIndex];
      }else{
        if(party[party.length - 1].color === colors[randomIndex]){
          while(party[party.length - 1].color === colors[randomIndex]){
            randomIndex = Math.floor(Math.random() * colors.length);
          }
          return colors[randomIndex];;
        }else{
          return colors[randomIndex];;
        }
      }
    }
    if(!arrayEmpty){
      setParty([...party, { id: party[party.length - 1].id + 1, name: name, color: randomColor() }]);
    }else{
      setParty([{ id: 1, name: name, color: randomColor() }]);
    }
  };

  const removeMemberHandler = (id) => {
    setParty(party.filter((member) => member.id !== id));
  };

  return (
    <div className="party">
      <AddMember addMember={addMemberHandler} />
      <span></span>
      {party.map((member, index) => (
        <PartyMember key={index} name={member.name} id={member.id} color={member.color} removeHandler={removeMemberHandler} />
      ))}
    </div>
  );
};

export default Party;
