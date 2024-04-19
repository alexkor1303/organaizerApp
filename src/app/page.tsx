import style from "./page.module.scss";
import cn from "classnames";
import { Quiz, Todo, Weather } from "./components";
export default function Home() {
  return (
    <main className={style.home_main}>
      <div className={style.wrapper}>
        <Todo className={style.todo}></Todo>
        <div className={cn(style.homeBlock, style.gallery)}>gallery</div>
        <Quiz className={cn(style.quiz)} />
        <Weather className={cn(style.homeBlock, style.meteo)}></Weather>
        <div className={cn(style.homeBlock, style.player)}>player</div>
      </div>
    </main>
  );
}
