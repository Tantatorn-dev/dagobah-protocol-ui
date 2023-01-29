"use client";
import Hero from "@/components/hero/Hero";
import { css } from "@emotion/css";

export default function Home() {
  return (
    <main
      className={css`
        width: 100%;
        height: 100vh;
        color: white;
        background-color: #150a07;
      `}
    >
      <Hero />
    </main>
  );
}
