import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">My shop</motion.h1>
      <div className={styles["product-container"]}>
        {["shoe", "watch", "headphones"].map((product) => (
          <Link href={product}>
            <a>
              <motion.img
                layoutId={product}
                className={styles.image}
                src={product + ".jpg"}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
