import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Categories.module.css";

const categoriesData = [
  {
    value: "all",
    name: "전체",
  },
  {
    value: "movie",
    name: "영화",
  },
  {
    value: "drama",
    name: "드라마",
  },
  {
    value: "book",
    name: "책",
  },
];

const Categories = ({
  posts,
  setPostList,
  movieResult,
  dramaResult,
  bookResult,
}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const categoryHandler = (data) => {
    if (data.value === "all") {
      setPostList(posts);
    }
    if (data.value === "movie") {
      setPostList(movieResult);
    }
    if (data.value === "drama") {
      setPostList(dramaResult);
    }
    if (data.value === "book") {
      setPostList(bookResult);
    }
  };

  return (
    <div className={styles.category}>
      {categoriesData.map((c, i) => (
        <motion.div
          key={c.value}
          className={
            currIndex === i ? styles.currCategory : styles.categorySelector
          }
          onClick={() => {
            categoryHandler(c);
            setCurrIndex(i);
          }}
        >
          <motion.div style={{ zIndex: 1 }} className={styles.text}>
            {c.name}
          </motion.div>
          {currIndex === i && (
            <motion.div
              animate={{
                x: [-5, 5, 0],
                opacity: [0, 0.5, 1],
                transition: {
                  type: "spring",
                  duration: 0.5,
                },
              }}
              className={styles.highlight}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Categories;
