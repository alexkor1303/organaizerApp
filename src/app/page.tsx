import style from "./page.module.scss";
import cn from "classnames";
import { Quiz, Todo } from "./components";
export default function Home() {
  return (
    <main className={style.home_main}>
      <div className={style.wrapper}>
        <Todo className={style.todo}>TO DO APP</Todo>
        <div className={cn(style.homeBlock, style.gallery)}>gallery</div>
        <Quiz className={cn(style.quiz)} />
        <div className={cn(style.homeBlock, style.meteo)}>meteo</div>
        <div className={cn(style.homeBlock, style.player)}>player</div>
      </div>
    </main>
  );
}
