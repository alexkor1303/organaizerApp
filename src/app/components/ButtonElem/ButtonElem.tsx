import { ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
interface ButtonProps {
  children: ReactNode;
  style: "default" | "green" | "red";
  onClick: () => void;
}
export const ButtonElem = ({
  children,
  style = "default",
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.standart, {
        [styles.red]: style === "red",
        [styles.green]: style === "green",
      })}>
      {children}
    </button>
  );
};
