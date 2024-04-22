"use client";
import { ModalWindow } from "../index";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Props from "./HeaderProps";
import style from "./Header.module.scss";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";
import { LinksList } from "./HeaderLink";

export const Header = ({}: Props): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const сloseModal = () => {
    setOpenModal(false);
  };
  const [info, setInfo] = useState({
    profileName: `User Name`,
    profilePhoto: `./avatar.svg`,
  });
  const setUser = (userName: string, userPhoto: string) => {
    setInfo({
      profileName: userName,
      profilePhoto: userPhoto,
    });
  };
  const pathName = usePathname();
  return (
    <header className={style.wrapper}>
      <section className={style.user_section}>
        <div className={style.user_image}>
          <Image
            src={info.profilePhoto}
            width={70}
            height={70}
            alt="profileImage"
          />
        </div>
        <div className={style.user_info}>
          {info.profileName.split(" ").map((word, index) => (
            <p key={index}>{word}</p>
          ))}
        </div>
      </section>
      <section className={style.navigation_section}>
        <nav>
          <ul>
            {LinksList.map((link) => {
              const isActive = pathName[1] === link.link[1];
              return (
                <li
                  key={link.id}
                  className={cn(style.link, isActive ? style.activeLink : "")}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              );
            })}
            <button
              className={cn(style.modalButton)}
              onClick={() => setOpenModal(true)}>
              Login
            </button>
            <ModalWindow
              openModal={openModal}
              сloseModal={сloseModal}
              setUser={setUser}
            />
          </ul>
        </nav>
      </section>
    </header>
  );
};
