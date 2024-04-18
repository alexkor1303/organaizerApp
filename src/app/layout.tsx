import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import style from "./layout.module.scss";
import { Header, Footer } from "./components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organaizer app",
  description: "NEXT JS TECHNOLOGY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className={style.wrapper}>
          <Header className="layout" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
