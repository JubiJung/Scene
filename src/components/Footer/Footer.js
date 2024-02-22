import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer = () => {
  const movePage = useNavigate();
  const writeNewPost = () => {
    movePage("/postwrite");
  };
  return (
    <div className={styles.writeBtnArea}>
      <motion.button
        whileHover={{ scale: [1, 1.05] }}
        transition={{ duration: 0.15 }}
        className={styles.writeBtn}
        onClick={writeNewPost}
      >
        글쓰기
      </motion.button>
    </div>
  );
};

export default Footer;
