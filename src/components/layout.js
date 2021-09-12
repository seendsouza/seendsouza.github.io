import React from "react"
import Navbar from "./navbar.js"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          © {new Date().getFullYear()}, Sean D'Souza
        </footer>
      </div>
    </>
  )
}
