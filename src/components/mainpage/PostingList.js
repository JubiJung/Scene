import React from "react";
import PostListTable from "./PostListTable";
import styles from "./PostingList.module.css";

const PostingList = ({ filteredList }) => {
  return (
    <div className={styles.postsList}>
      {
        <div className={styles.postList}>
          {filteredList.map((d) => (
            <PostListTable key={d.id} title={d.title} props={d} />
          ))}
        </div>
      }
    </div>
  );
};
export default PostingList;
