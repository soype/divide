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
      color: "#ff0000",
    },
  ]);

  const addMemberHandler = (name) => {
    // Generate random background color
    const randomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    if(party.length >= 1){
      setParty([...party, { id: party[party.length - 1].id + 1, name: name, color: randomColor() }]);
    }else{
      setParty([{ id: 1, name: name, color: randomColor() }]);
    }
  };

  const removeMemberHandler = (id) => {
    alert("Removing " + id);
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
