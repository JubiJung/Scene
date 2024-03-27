import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div
      key={new Date()}
      animate={{ opacity: [0.5, 1] }}
      transition={{ duration: 0.3 }}
      className={styles.postList}
      onClick={goDetailedPage}
    >
      <div>{props.listTitle}</div>
    </motion.div>
  );
};
export default PostListTable;
