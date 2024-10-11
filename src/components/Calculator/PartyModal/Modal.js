import React, { useState } from "react";

import styles from "./Modal.module.scss";

import Button from "@/components/UI/Button/Button";

const Modal = ({ editMember, showModal, addMember, removeMember }) => {
  const [name, setName] = useState(editMember ? editMember.name : "");
  const [email, setEmail] = useState(editMember ? editMember.email : "");

  const submitModalHandler = (e) => {
    e.preventDefault();
    addMember(name, email);
    showModal(false);
  };

  const editMemberHandler = (e) => {
    e.preventDefault();
    if(editMember){
      addMember(name, email, editMember.id, editMember.color);
    }
    showModal(false);
  }

  const removeMemberHandler = (e) => {
    e.preventDefault();
    removeMember(editMember.id);
    showModal(false);
  }

  return (
    <div className={styles.modal}>
      <form className={styles["modal__form"]} onSubmit={submitModalHandler}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email (opcional)</label>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        {editMember ? (
          <>
          <Button color={"yellow"} customClass={"small"} onClick={editMemberHandler}>
            Editar
          </Button>
          <Button color={'red'} customClass={'small'} onClick={removeMemberHandler}>Borrar</Button>
          </>
        ) : (
          <Button color={"green"} customClass={"small"}>
            Agregar
          </Button>
        )}
        <div aria-role="button" aria-label="Cerrar dialogo" className={styles["modal__close"]} onClick={editMemberHandler}>
        X
      </div>
      </form>
      
    </div>
  );
};

export default Modal;
