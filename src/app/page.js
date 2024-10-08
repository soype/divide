import Link from "next/link";
import styles from "./page.module.css";

import Party from "@/components/Party/Party";
import Bill from "@/components/Bill/Bill";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Party />
        <Bill />
      </div>
    </>
  );
}
