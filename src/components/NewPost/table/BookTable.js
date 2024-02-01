import React from "react";
import ReactStars from "react-stars";
import styles from "./BookTable.module.css";

const BookTable = ({ inputValue, setInputHandler, onRatingHandler }) => {
  return (
    <section className={styles.bookContainer}>
      <div>
        <label>읽은 날짜</label>
        <input
          type="date"
          name="readDate"
          value={inputValue.readDate}
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
        <label>출판사</label>
        <input
          name="publisher"
          type="text"
          value={inputValue.publisher}
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
export default BookTable;
