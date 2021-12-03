import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Auth 🪄</h1>
        <span>
          powered by <a href="https://magic.link/">Magic Link</a>,{" "}
          <a href="https://nextjs.org/">Next.Js</a>,{" "}
          <a href="https://supabase.com/">Supabase</a>,{" "}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </span>
      </main>
    </div>
  );
}
