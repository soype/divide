import Link from "next/link";
import styles from "./page.module.css";

import Party from "@/components/Party/Party";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Party />
      </div>
    </>
  );
}
