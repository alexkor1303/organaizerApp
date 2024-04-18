"use client";
import Props from "./HeaderProps";
import { LinksList } from "./HeaderLink";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";

export const Header = ({}: Props): JSX.Element => {
  const pathName = usePathname();
  const name = "Name";
  const secondName = "SecondName";
  return (
    <header className={style.wrapper}>
      <section className={style.user_section}>
        <div className={style.user_image}>
          <Image src="./avatar.svg" width={50} height={50} alt="profileImage" />
        </div>
        <div className={style.user_info}>
          <p>{name}</p>
          <p>{secondName}</p>
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
          </ul>
        </nav>
      </section>
    </header>
  );
};
