import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Auth 🪄</h1>
        <Image
          src={"/magic_black.svg"}
          alt="Magic Black"
          width={150}
          height={100}
        />
        <span>
          powered by{" "}
          <a href="https://magic.link/" rel="noreferrer" target="_blank">
            Magic Link
          </a>
          ,{" "}
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            Next.Js
          </a>
          ,{" "}
          <a href="https://supabase.com/" rel="noreferrer" target="_blank">
            Supabase
          </a>
          ,{" "}
          <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
            Tailwind CSS
          </a>
        </span>
      </main>
    </div>
  );
}
