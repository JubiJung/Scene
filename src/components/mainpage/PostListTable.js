import { useNavigate } from "react-router-dom";
import styles from "./PostListTable.module.css";

const PostListTable = ({ props }) => {
  const movePage = useNavigate();
  const goDetailedPage = (e) => {
    const title = e.target.innerText;
    if (title.includes("[영화]")) {
      movePage(`/movie/${props.id}`, { state: props.id });
    }
    if (title.includes("[드라마]")) {
      movePage(`/drama/${props.id}`, { state: props.id });
    }
    if (title.includes("[책]")) {
      movePage(`/book/${props.id}`, { state: props.id });
    }
  };
  return (
    <div className={styles.postList} onClick={goDetailedPage}>
      <div>{props.listTitle}</div>
    </div>
  );
};
export default PostListTable;
