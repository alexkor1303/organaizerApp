"use client";
import { ReactNode, useState } from "react";
import { data } from "./dataTodo";
import style from "./Todo.module.scss";
import cn from "classnames";
import { TodoItem } from "./Item/TodoItem";
import { AddItemBlock } from "./Item/AddTodo";
import { HomeBlock, ButtonElem } from "..";
type TodoProps = {
  className: string;
};

export function Todo({ className }: TodoProps) {
  const [todos, setTodos] = useState(data);
  const changeState = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const removeElem = (id: string) => {
    setTodos([...todos].filter((elem) => elem.id !== id));
  };
  const addElem = (title: string) => {
    setTodos([
      {
        id: Math.floor(Math.random() * 101).toString(),
        title,
        isCompleted: false,
      },
      ...todos,
    ]);
  };
  return (
    <div className={cn(className, style.todoWrapper)}>
      <HomeBlock>
        <AddItemBlock addElem={addElem} />
        {todos.map((elem, i) => {
          return (
            <TodoItem
              key={i}
              element={elem}
              removeElem={removeElem}
              changeState={changeState}
            />
          );
        })}
      </HomeBlock>
    </div>
  );
}
