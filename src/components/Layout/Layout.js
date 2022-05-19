import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { Brightness1Rounded, Brightness1TwoTone, Brightness3Rounded, Brightness4Rounded, Brightness5Rounded, Brightness6Rounded } from "@material-ui/icons";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Know Your Borders" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
        <svg width="100" height="100"id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>globe-dots</title><circle cx="256" cy="256" r="255.94" transform="translate(-84.41 132.75) rotate(-25.1)" fill="#58595b"/><path d="M380.24,180.29c-23.84-40.5-68.47-67.69-113.48-70.13-59.7-4.57-117,29.49-142.3,84.39-18.15,36.88-17.45,88.86.91,125.25,23.3,50.38,78,84.61,133.07,82.35,55.88-.08,108.74-37.61,130.4-88.3C407.86,273.05,403.54,218.1,380.24,180.29Zm-134.48-61.7c-21.85,16.11-41.52,39.15-52.67,62.11-11.59-5.79-23.34-13.92-32.29-23.4C184.32,134.59,213.35,121,245.77,118.59ZM160.46,354.68c9.24-10,20.71-17.3,31.63-23.48,11.34,22.93,29.62,46,51.5,62.14C211.61,390.61,183.1,376.59,160.46,354.68Zm92.94,35.2a161.25,161.25,0,0,1-53.49-62.33c16.44-7.73,34.17-11.62,53.69-12.12ZM238.76,261.4l15.09.06-.09,45.23a13.73,13.73,0,0,1-2.5.32,152,152,0,0,0-54.93,12.59A171.62,171.62,0,0,1,185,275.86a23.79,23.79,0,0,1-8.32,1.81,170.63,170.63,0,0,0,12.12,45.73c-12.77,6.48-23.87,15.35-34.41,24.9-21.78-24.37-33.63-53.65-35-86.79l32.86-.06a24.56,24.56,0,0,1-1.57-8.37l-31,0-.21-.19.39-10.45c.58-.46-.14-1.31.32-1.93,3.7-28.8,14.55-55.28,34.61-77.13,10.52,10.09,22.13,18.8,34.66,25.07a171,171,0,0,0-11.45,40,24.52,24.52,0,0,1,8.12,2.24,157.77,157.77,0,0,1,10.9-38.4c17.56,7.48,37.17,12.46,57,12.61l-.22,48.08-53.55,0a24.54,24.54,0,0,1-1.55,8.37Zm15.05-65c-20.17-.42-36.16-4.64-53.13-11.81,11.62-23.82,31.07-45.94,53.43-61.52Zm8.55,8.29A136.52,136.52,0,0,0,299.1,198a24.34,24.34,0,0,1-3.79-7.67,120.38,120.38,0,0,1-32.9,5.72l.11-71.54c15.22,10,29.6,24.44,40.65,39.89a24.3,24.3,0,0,1,7.41-4.28,177.67,177.67,0,0,0-41.14-41.46c30.52,3.24,58.77,15.67,82,38.31a121.06,121.06,0,0,1-12.94,11.37,25,25,0,0,1,4,7.7,148.84,148.84,0,0,0,14.83-12.68c22.49,24.76,34.25,55.23,35.3,89.49l-51.78.11a177.82,177.82,0,0,0-8.46-48.87,24,24,0,0,1-7.82,3.3,159,159,0,0,1,7.75,45.52l-69.7.17-.12-.14-.13-47.6ZM357,348.08A148.76,148.76,0,0,0,339.66,334a24.79,24.79,0,0,1-5.84,6.21A142.75,142.75,0,0,1,351,354.41c-21.86,21.33-49.1,34.71-78.87,38.41a177.62,177.62,0,0,0,43.51-47.76l.06-.08a24.12,24.12,0,0,1-8.29-2.65,167.75,167.75,0,0,1-45.59,47.26l.33-74.15a145.34,145.34,0,0,1,32,5.71c0-.22-.06-.4-.06-.62a24.17,24.17,0,0,1,1.4-7.87,148.8,148.8,0,0,0-33.34-5.6l.21-45.57,67.91-.15,1.93.14a141.32,141.32,0,0,1-5.21,35.79,24.48,24.48,0,0,1,7.62,4.31,160,160,0,0,0,6.1-40.18l49.68-.11c.6.33,1.37.12,2.1.19C391.31,293.82,378.94,323.25,357,348.08Z" fill="#b4bb4a"/><path d="M304.43,194.1a18,18,0,0,0,14.5,7.38,18.63,18.63,0,0,0,4.13-.53,17.45,17.45,0,0,0,5.69-2.42A18.05,18.05,0,0,0,337,183.38a18.76,18.76,0,0,0-3.79-11,18,18,0,0,0-28.81,21.69Z" fill="#fff"/><path d="M324.88,303.53a17.59,17.59,0,0,0-6-1.1,18.45,18.45,0,0,0-18.1,18.09c0,.16.06.3.06.46a18.06,18.06,0,0,0,15.72,17.4,17.66,17.66,0,0,0,2.33.23,17.94,17.94,0,0,0,10.88-3.71,18.41,18.41,0,0,0,4.28-4.54,17.88,17.88,0,0,0-3.65-23.69A17.34,17.34,0,0,0,324.88,303.53Z" fill="#fff"/><path d="M183.23,236.77a17.78,17.78,0,0,0-5.92-1.64c-.62-.06-1.22-.19-1.86-.19a18.12,18.12,0,0,0-18.1,18.1l0,0a17.64,17.64,0,0,0,1.14,6.12,18.06,18.06,0,0,0,16.94,11.94c.32,0,.61-.08.92-.09a17.52,17.52,0,0,0,6.08-1.32,18.47,18.47,0,0,0,11.11-16.65v0A18.09,18.09,0,0,0,183.23,236.77Z" fill="#fff"/></svg>
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness4Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Created By Kevin</footer>
    </div>
  );
};

export default Layout;
