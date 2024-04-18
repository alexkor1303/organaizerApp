import style from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
export const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer_wrapper}>
      <Link target="blank" href={"https://github.com/alexkor1303"}>
        <Image
          className={style.ghLogo}
          src="/github-logo.svg"
          alt="gihtubLink"
          width={40}
          height={40}></Image>
      </Link>
      <span className={style.author}>created by Alexkor</span>
    </footer>
  );
};
