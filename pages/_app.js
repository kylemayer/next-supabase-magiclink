import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../client";

function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated");
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === "SIGNED_IN") {
          setAuthenticatedState("authenticated");
          router.push("./profile");
        }
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("not-authenticated");
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function handleAuthChange(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticatedState("authenticated");
    }
  }

  return (
    <div>
      <nav className={navStyle}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/profile">
          <a style={linkStyle}>Profile</a>
        </Link>
        {authenticatedState === "not-authenticated" && (
          <Link href="/sign-in">
            <a style={linkStyle}>Sign in</a>
          </Link>
        )}
        <Link href="/protected">
          <a style={linkStyle}>Protected</a>
        </Link>
      </nav>
      <Component {...pageProps} />;
    </div>
  );
}

const linkStyle = {
  marginRight: 10,
};

const navStyle = {
  margin: 20,
};

export default MyApp;
