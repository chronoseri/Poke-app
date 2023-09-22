import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";
import { ReactNode } from "react";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.default}>
      <div className={styles.header}></div>
      <main>{children}</main>
    </div>
  );
}
