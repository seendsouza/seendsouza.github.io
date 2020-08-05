import React from "react";
import Navbar from "./navbar.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
        {children}
      </main>
    </>
  );
}
