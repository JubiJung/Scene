import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { postActions } from "../../store/index";
import QuillEditor from "../NewPost/QuillEditor";
import MovieTable from "../NewPost/table/MovieTable";
import BookTable from "../NewPost/table/BookTable";
import DramaTable from "../NewPost/table/DramaTable";
import styles from "./EditPage.module.css";

const EditPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movePage = useNavigate();
  const { state } = location;
  const [inputValue, setInputValue] = useState(state);
  const [selectedCategory, setSelectedCategory] = useState(state.category);

  useEffect(() => {
    fetch("https://scene-c942c-default-rtdb.firebaseio.com/posts.json", {
      method: "PUT",
      body: JSON.stringify(state),
    });
  }, [state]);

  const onChangeInputHandler = (e) => {
    const { value, name: inputName } = e.target;
    setInputValue({ ...inputValue, [inputName]: value });
  };

  const handleRatingsAndEditor = (name, e) => {
    setInputValue({ ...inputValue, [name]: e });
  };

  const dispatchHandler = (category, value) => {
    dispatch(
      postActions.editPost({
        ...value,
        category: selectedCategory,
        listTitle: `[${category}] ${value.title}`,
      })
    );
    movePage(`/${selectedCategory}/${value.id}`, { state: value.id });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (selectedCategory === "movie") {
      dispatchHandler("영화", inputValue);
    }
    if (selectedCategory === "drama") {
      dispatchHandler("드라마", inputValue);
    }
    if (selectedCategory === "book") {
      dispatchHandler("책", inputValue);
    }
  };
  return (
    <section className={styles.editSection}>
      <form className={styles.editForm} onSubmit={onSubmitHandler}>
        <div className={styles.dropDownArea}>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className={styles.selectOptionDropDown}
          >
            <option value="movie">영화</option>
            <option value="drama">드라마</option>
            <option value="book">책</option>
          </select>
        </div>
        <div className={styles.title}>
          <input
            className={styles.titleInput}
            name="title"
            value={inputValue.title}
            type="text"
            onChange={onChangeInputHandler}
          ></input>
        </div>
        <div className={styles.informTable}>
          {selectedCategory === "movie" && (
            <MovieTable
              inputValue={inputValue}
              setInputHandler={onChangeInputHandler}
              onRatingHandler={handleRatingsAndEditor}
            />
          )}
        </div>
        <div className={styles.informTable}>
          {selectedCategory === "drama" && (
            <DramaTable
              inputValue={inputValue}
              onRatingHandler={handleRatingsAndEditor}
              setInputHandler={onChangeInputHandler}
            />
          )}
        </div>
        <div className={styles.informTable}>
          {selectedCategory === "book" && (
            <BookTable
              inputValue={inputValue}
              onRatingHandler={handleRatingsAndEditor}
              setInputHandler={onChangeInputHandler}
            />
          )}
        </div>
        <div className={styles.mainContent}>
          <QuillEditor value={inputValue} setValue={handleRatingsAndEditor} />
        </div>
        <div className={styles.submitButtonArea}>
          <button className={styles.submitBtn} type="submit">
            확인
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditPage;
