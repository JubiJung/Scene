import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../../store/index";
import ReactStars from "react-stars";
import styles from "./MovieDetailedPage.module.css";

const MovieDetailedPage = () => {
  const movePage = useNavigate();
  const location = useLocation();
  const { state } = location;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);

  const currentPost = posts.filter((post) => post.id === state)[0];
  console.log(currentPost);
  const goEditPage = () => {
    movePage("/edit", { state: currentPost });
  };
  const goMainPage = () => {
    movePage("/");
  };
  const deletePost = () => {
    dispatch(postActions.deletePost(currentPost));
    goMainPage();
  };

  return (
    <section className={styles.detailedSection}>
      <div className={styles.delIconArea} onClick={deletePost}>
        <div className={styles.deleteBtn} onClick={deletePost}></div>
      </div>
      <header className={styles.header}>
        <div className={styles.watchDate}>{currentPost.watchDate}</div>
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
        {currentPost.genre}, {currentPost.director} 감독,{" "}
        {currentPost.releaseDate} 개봉
      </div>
      <div className={styles.casting}>{currentPost.casting} 출연</div>
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

export default MovieDetailedPage;
