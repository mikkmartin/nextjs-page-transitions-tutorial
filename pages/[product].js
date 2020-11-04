import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Product() {
  const {
    query: { product },
  } = useRouter();
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">{product}</motion.h1>
      <Link href="/">
        <a>
          <motion.img
            layoutId={product}
            className={styles["big-image"]}
            src={product + ".jpg"}
          />
        </a>
      </Link>
    </div>
  );
}
