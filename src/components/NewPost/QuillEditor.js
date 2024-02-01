import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize";
import "react-quill/dist/quill.snow.css";
import styles from "./QuillEditor.module.css";
Quill.register("modules/ImageResize", ImageResize);

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const QuillEditor = ({ value, setValue }) => {
  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
    ImageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
  };
  return (
    <ReactQuill
      className={styles.quillEditor}
      theme="snow"
      modules={modules}
      formats={formats}
      onChange={(e) => {
        setValue("content", e);
      }}
      value={value.content}
    />
  );
};

export default QuillEditor;
