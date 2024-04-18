import { useState } from "react";
import style from "./TodoItem.module.scss";
import { MdAddBox } from "react-icons/md";

interface addElemProp {
  addElem: (arg: string) => void;
}

export const AddItemBlock = ({ addElem }: addElemProp) => {
  const [title, setTitle] = useState("");

  const handleAddElem = () => {
    if (title.trim() !== "") {
      addElem(title);
      setTitle("");
    } else {
      alert("Пустые задачи добавлять нельзя!");
    }
  };

  return (
    <div className={style.addBlock}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className={style.input}
        placeholder="enter your task"
        onKeyDown={(e) => e.key === "Enter" && handleAddElem()}
      />
      <button className={style.addButton} onClick={handleAddElem}>
        <MdAddBox size={30} />
      </button>
    </div>
  );
};
