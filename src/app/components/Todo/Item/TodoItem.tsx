import style from "./TodoItem.module.scss";
import cn from "classnames";
import { MdDeleteOutline } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
interface TodoItemProps {
  element: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  removeElem: (arg0: string) => void;
  changeState: (arg0: string) => void;
}
export const TodoItem = ({
  element,
  removeElem,
  changeState,
}: TodoItemProps) => {
  return (
    <div
      className={cn(style.itemWrapper, {
        [style.itemWrapperCompleted]: element.isCompleted,
      })}>
      <button
        onClick={() => changeState(element.id)}
        className={cn(style.checkBox, {
          [style.isCompletedButton]: element.isCompleted,
        })}>
        <BsCheck
          size={20}
          className={cn(style.icon, {
            [style.isCompletedIcon]: element.isCompleted,
          })}
        />
      </button>
      <span>{element.title}</span>
      <button
        onClick={() => removeElem(element.id)}
        className={cn(style.stash, {
          [style.stashVisible]: element.isCompleted,
        })}>
        <MdDeleteOutline size={20} />
      </button>
    </div>
  );
};
