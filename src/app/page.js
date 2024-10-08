import Link from "next/link";
import styles from "./page.module.css";

import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Calculator />
      </div>
    </>
  );
}
