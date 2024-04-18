import style from "./Homeblock.module.scss";
type Props = {
  children: React.ReactNode;
};
export const HomeBlock = ({ children }: Props) => {
  return <div className={style.Block}>{children}</div>;
};
