import React, { useState, useEffect } from "react";

import formatNumber from "@/lib/FormatNumber";

import styles from "./Result.module.scss";

const Result = ({ items, members }) => {
  const [totalBill, setTotalBill] = useState();
  const [parsedMembers, setParsedMembers] = useState([]);

  useEffect(() => {
    let total = 0;

    let membersList = members.map((member) => ({
      id: member.id,
      name: member.name,
      color: member.color,
      total: 0,
      toPay: 0,
    }));
    items.forEach((item) => {
      // Get total bill
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      const pricePerPerson = itemTotal / item.members.length;
      item.members.forEach((member) => {
        if (membersList.find((m) => m.id === member)) {
          membersList.find((m) => m.id === member).total += pricePerPerson;
        }
      });
    });

    const toPay = total / members.length;
    membersList.forEach((member) => {
      member.toPay = toPay - member.total;
    });

    setParsedMembers(membersList);
    setTotalBill(total);
  }, [items, members]);

  return (
    <div className={styles.result}>
      <h2>Total a pagar: $ {formatNumber(totalBill)}</h2>
      <div className={styles.result__members}>
        {parsedMembers.map((member) => (
          <div className={styles.result__member} key={member.id}>
            <p>
              {member.name} puso $ {formatNumber(member.total)} <br/> {member.toPay < 0 ? <span>debe recibir $ {formatNumber(-member.toPay)}</span> : <span>debe pagar $ {formatNumber(member.toPay)}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
