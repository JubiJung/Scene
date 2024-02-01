import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../../store/index";
import ReactStars from "react-stars";
import styles from "./BookDetailedPage.module.css";

const BookDetailedPage = () => {
  const movePage = useNavigate();
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  const currentPost = posts.filter((post) => post.id === state)[0];

  const goEditPage = () => {
    movePage("/edit", { state: currentPost });
  };
  const goMainPage = () => {
    movePage("/");
  };
  const deletePost = async () => {
    dispatch(postActions.deletePost(currentPost));
    goMainPage();
  };
  return (
    <section className={styles.detailedSection}>
      <div className={styles.delIconArea} onClick={deletePost}>
        <div className={styles.deleteBtn} onClick={deletePost}></div>
      </div>
      <header className={styles.header}>
        <div className={styles.readDate}>{currentPost.readDate}</div>
        <div className={styles.title}>{currentPost.title}</div>
        <ReactStars
          className={styles.ratings}
          value={currentPost.ratings}
          count={5}
          size={20}
          color2={"#ffea00"}
          edit={false}
        />
      </header>
      <div className={styles.info}>
        {currentPost.genre}, {currentPost.writer} 저, {currentPost.publisher}{" "}
        출판
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: currentPost.content }}
        className={styles.mainText}
      ></div>
      <div className={styles.editIconArea} onClick={goEditPage}>
        <div className={styles.editBtn} onClick={goEditPage}></div>
      </div>
    </section>
  );
};
export default BookDetailedPage;
