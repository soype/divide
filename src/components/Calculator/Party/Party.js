"use client";

import React from "react";

import PartyMember from "./PartyMember/PartyMember";
import Button from "@/components/UI/Button/Button";

import styles from "./Party.module.scss";

const Party = ({ party, showModal, editMemberHandler }) => {
  const addMember = () => {
    showModal();
  };

  const editMember = (id) => {
    editMemberHandler(id);
  };

  return (
    <div className={styles.party}>
      <div className={styles['party__top']}>
        <h2>¿Quiénes están hoy?</h2>
        <div className={styles['party__add']}>
          <Button color={'green'} customClass={'small'} onClick={addMember}>Agregar integrante</Button>
        </div>
      </div>
      
      <span></span>
      <ul className={styles['party__members']}>
        {party.map((member, index) => (
          <PartyMember key={index} name={member.name} id={member.id} color={member.color} editMember={editMember} />
        ))}
      </ul>
    </div>
  );
};

export default Party;
