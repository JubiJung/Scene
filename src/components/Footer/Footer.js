import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const movePage = useNavigate();
  const writeNewPost = () => {
    movePage("/postwrite");
  };
  return (
    <div className={styles.writeBtnArea}>
      <button className={styles.writeBtn} onClick={writeNewPost}>
        글쓰기
      </button>
    </div>
  );
};

export default Footer;
