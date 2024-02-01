import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Categories from "./Categories";
import PostingList from "./PostingList";
import Footer from "../Footer/Footer";
import SearchBar from "../header/SearchBar";
import styles from "./MainPage.module.css";

const listFilterFunc = (items, query) => {
  if (items === undefined || items === null) return [];
  else {
    query = query.toLowerCase();
    return items.filter((item) =>
      item.listTitle.split().some((word) => word.includes(query))
    );
  }
};
const groupingPostingList = (items, group) => {
  if (items === null) return [];
  else {
    return items.filter((item) => item.category === group);
  }
};
const MainPage = () => {
  const posts = useSelector((state) => state);
  useEffect(() => {
    fetch("https://scene-c942c-default-rtdb.firebaseio.com/posts.json", {
      method: "PUT",
      body: JSON.stringify(posts),
    });
  }, [posts]);

  const [searchInputVal, setSearchInputVal] = useState("");
  const [postList, setPostList] = useState(posts);
  const results = listFilterFunc(postList, searchInputVal);
  const movie = groupingPostingList(posts, "movie");
  const drama = groupingPostingList(posts, "drama");
  const book = groupingPostingList(posts, "book");

  return (
    <main className={styles.main}>
      <SearchBar
        searchInputVal={searchInputVal}
        setSearchInputVal={setSearchInputVal}
      />
      <Categories
        movieResult={movie}
        dramaResult={drama}
        bookResult={book}
        posts={posts}
        setPostList={setPostList}
      />
      <PostingList filteredList={results} />
      <Footer />
    </main>
  );
};

export default MainPage;
