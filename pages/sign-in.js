import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { supabase } from "../client";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function signIn() {
    if (!email) return;
    const { error, data } = await supabase.auth.signIn({
      email,
    });
    if (error) {
      console.log(error);
    } else {
      setSubmitted(true);
    }
  }
  if (submitted) {
    return (
      <div className={styles.container}>
        <h1>Please check your email to sign in</h1>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src={"/icon_color.svg"}
          alt="Magic Link"
          height={100}
          width={200}
        />
        <h1 className={styles.title}>Sign In</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: 10 }}
        />
        <button onClick={() => signIn()}>Sign In</button>
      </main>
    </div>
  );
}
