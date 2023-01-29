"use client";
import Hero from "@/components/hero/Hero";
import { css } from "@emotion/css";

export default function Home() {
  return (
    <main
      className={css`
        background: #150a07;
        width: 100%;
        height: 100vh;
      `}
    >
      <Hero />
    </main>
  );
}
