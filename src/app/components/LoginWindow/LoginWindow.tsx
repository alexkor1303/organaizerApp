"use client";
import React from "react";
import { useState, useEffect } from "react";
import style from "./LoginWindow.module.scss";
import cn from "classnames";
interface ModalProps {
  openModal: boolean;
  сloseModal: () => void;
  setUser: (arg1: string, arg2: string) => void;
}

export const ModalWindow = ({ openModal, сloseModal, setUser }: ModalProps) => {
  const [title, setTitle] = useState("");
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    if (userInfo !== "") {
      try {
        fetch(`https://api.github.com/users/${userInfo}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("cant find user");
            }
            return res.json();
          })
          .then((res) => setUser(res.name, res.avatar_url));
      } catch (e) {
        console.error(e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <div
      className={cn({ [style.closed]: !openModal, [style.opened]: openModal })}>
      <div className={style.modalContent}>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="github link"
        />
        <button onClick={() => setUserInfo(title)}>input</button>
        <button onClick={() => сloseModal()}>close</button>
      </div>
    </div>
  );
};
