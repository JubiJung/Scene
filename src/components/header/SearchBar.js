import { motion, spring } from "framer-motion";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchInputVal, setSearchInputVal }) => {
  const handleSearchInputValue = (e) => {
    setSearchInputVal(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.searchBar}>
      <motion.form
        whileHover={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.3 }}
        className={styles.searchForm}
        onSubmit={submitHandler}
      >
        <img
          className={styles.searchIcon}
          alt="search_icon"
          src="img/search_icon.png"
        />
        <input
          className={styles.searchInput}
          onChange={handleSearchInputValue}
          name="searchBarInput"
          value={searchInputVal}
          placeholder="제목을 입력하세요."
        />
      </motion.form>
    </div>
  );
};
export default SearchBar;
