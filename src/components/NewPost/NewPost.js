import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/index";
import { v4 as uuid } from "uuid";
import QuillEditor from "./QuillEditor";
import MovieTable from "./table/MovieTable";
import DramaTable from "./table/DramaTable";
import BookTable from "./table/BookTable";
import styles from "./NewPost.module.css";

const NewPost = () => {
  const initialInputData = {
    category: "",
    listTitle: "",
    id: "",
    title: "",
    director: "",
    writer: "",
    publisher: "",
    readDate: "",
    casting: "",
    genre: "",
    releaseDate: "",
    watchDate: "",
    ratings: 0,
    content: "",
  };

  const id = uuid();
  const dispatch = useDispatch();
  const movePage = useNavigate();
  const [showPage, setShowPage] = useState("movie");
  const [inputBlur, setInputBlur] = useState("false");
  const [inputValue, setInputValue] = useState(initialInputData);
  const categoryRef = useRef(null);

  const onDispatchAndGoHome = (category) => {
    dispatch(
      postActions.addPost({
        ...inputValue,
        id: id,
        category: categoryRef.current.value,
        listTitle: `[${category}] ${inputValue.title}`,
      })
    );
    movePage("/");
  };

  const handleRatingsAndEditor = (name, e) => {
    setInputValue({ ...inputValue, [name]: e });
  };

  const onChangeInputHandler = (e) => {
    const { value, name: inputName } = e.target;
    setInputValue({ ...inputValue, [inputName]: value });
  };

  const onChangeHandler = (e) => {
    if (e.target.value === "movie") {
      setShowPage("movie");
    }
    if (e.target.value === "drama") {
      setShowPage("drama");
    }
    if (e.target.value === "book") {
      setShowPage("book");
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (categoryRef.current.value === "movie") {
      onDispatchAndGoHome("영화");
    }
    if (categoryRef.current.value === "drama") {
      onDispatchAndGoHome("드라마");
    }
    if (categoryRef.current.value === "book") {
      onDispatchAndGoHome("책");
    }
  };
  return (
    <section className={styles.newPostSection}>
      <form className={styles.newPostForm} onSubmit={onSubmitHandler}>
        <div className={styles.dropDownArea} onChange={onChangeHandler}>
          <select
            ref={categoryRef}
            name="category"
            className={styles.selectOptionDropDown}
          >
            <option value="movie">영화</option>
            <option value="drama">드라마</option>
            <option value="book">책</option>
          </select>
        </div>
        <div className={styles.title}>
          <input
            // onBlur={() => {
            //   console.log("blur");
            // }}
            className={styles.titleInput}
            name="title"
            value={inputValue.title}
            type="text"
            placeholder="제목을 입력하세요."
            onChange={onChangeInputHandler}
            required
          ></input>
        </div>
        <div className={styles.informTable}>
          {showPage === "movie" && (
            <MovieTable
              inputValue={inputValue}
              setInputHandler={onChangeInputHandler}
              onRatingHandler={handleRatingsAndEditor}
            />
          )}
        </div>
        <div className={styles.informTable}>
          {showPage === "drama" && (
            <DramaTable
              inputValue={inputValue}
              setInputHandler={onChangeInputHandler}
              onRatingHandler={handleRatingsAndEditor}
            />
          )}
        </div>
        <div className={styles.informTable}>
          {showPage === "book" && (
            <BookTable
              inputValue={inputValue}
              setInputHandler={onChangeInputHandler}
              onRatingHandler={handleRatingsAndEditor}
            />
          )}
        </div>
        <div className={styles.mainContent}>
          <QuillEditor value={inputValue} setValue={handleRatingsAndEditor} />
        </div>
        <div className={styles.submitButtonArea}>
          <button className={styles.submitBtn}>확인</button>
        </div>
      </form>
    </section>
  );
};

export default NewPost;
