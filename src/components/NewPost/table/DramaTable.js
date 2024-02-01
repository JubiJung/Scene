import React from "react";
import ReactStars from "react-stars";
import styles from "./DramaTable.module.css";

const DramaTable = ({ inputValue, setInputHandler, onRatingHandler }) => {
  return (
    <section className={styles.dramaContainer}>
      <div>
        <label>시청일</label>
        <input
          type="date"
          name="watchDate"
          value={inputValue.watchDate}
          onChange={setInputHandler}
          required
        ></input>
      </div>
      <div>
        <label>방영일</label>
        <input
          type="date"
          name="releaseDate"
          value={inputValue.releaseDate}
          onChange={setInputHandler}
          required
        ></input>
      </div>
      <div>
        <label>작가</label>
        <input
          name="writer"
          type="text"
          value={inputValue.writer}
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
          count={5}
          size={20}
          color2={"#ffd700"}
          onChange={(e) => {
            onRatingHandler("ratings", e);
          }}
        />
      </div>
    </section>
  );
};

export default DramaTable;
