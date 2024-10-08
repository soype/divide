'use client';

import React from "react";

import AddMember from "./AddMember/AddMember";
import PartyMember from "./PartyMember/PartyMember";

import styles from "./Party.module.scss";

const Party = ({party, addMemberHandler, removeMemberHandler}) => {

  const addMember = (name) => {
    addMemberHandler(name);
  };

  const removeMember = (id) => {
    removeMemberHandler(id); 
  };

  return (
    <div className="party">
      <AddMember addMember={addMember} />
      <span></span>
      {party.map((member, index) => (
        <PartyMember key={index} name={member.name} id={member.id} color={member.color} removeHandler={removeMember} />
      ))}
    </div>
  );
};

export default Party;
