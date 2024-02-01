import React from "react";
import ReactStars from "react-stars";
import styles from "./MovieTable.module.css";

const MovieTable = ({ inputValue, setInputHandler, onRatingHandler }) => {
  return (
    <section className={styles.movieContainer}>
      <div>
        <label>관람일</label>
        <input
          type="date"
          name="watchDate"
          value={inputValue.watchDate}
          onChange={setInputHandler}
          required
        ></input>
      </div>
      <div>
        <label>개봉일</label>
        <input
          name="releaseDate"
          type="date"
          onChange={setInputHandler}
          value={inputValue.releaseDate}
          required
        ></input>
      </div>
      <div>
        <label>감독</label>
        <input
          name="director"
          type="text"
          value={inputValue.director}
          onChange={setInputHandler}
          required
        ></input>
      </div>
      <div>
        <label>출연진</label>
        <input
          name="casting"
          type="text"
          value={inputValue.casting}
          onChange={setInputHandler}
          required
        ></input>
      </div>
      <div>
        <label>장르</label>
        <input
          name="genre"
          type="text"
          value={inputValue.genre}
          onChange={setInputHandler}
          required
        ></input>
      </div>
      <div>
        <label>평점</label>
        <ReactStars
          name="ratings"
          className={styles.ratings}
          value={inputValue.ratings}
          onChange={(e) => {
            onRatingHandler("ratings", e);
          }}
          count={5}
          size={20}
          color2={"#ffd700"}
        />
      </div>
    </section>
  );
};

export default MovieTable;
