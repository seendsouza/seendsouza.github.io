import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Icon from "../../content/assets/seen-logo.svg"

const ListLink = props => (
  <li
    css={css`
      display: inline;
      text-align: center;
      align-items: center;
      height: 5rem;
      color: var(--text-primary);
      text-decoration: none;
      filter: grayscale(0%) opacity(1);
      transition: var(--transition-speed);
      &:hover {
        filter: grayscale(100%) opacity(0.7);
        background: var(--bg-secondary);
        color: var(--text-secondary);
      }
    `}
  >
    <Link to={props.to}>
      <div
        css={css`
          height: 100%;
          display: flex;
          align-items: center;
        `}
      >
        {props.children}
      </div>
    </Link>
  </li>
)

const LogoLink = props => (
  <li
    css={css`
      display: inline;
      text-align: center;
      color: var(--text-primary);
      font-size: 1.5rem;
      width: 100%;
      &:hover {
        filter: grayscale(100%) opacity(0.7);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    `}
  >
    <Link to={props.to}>
      <div
        css={css`
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {props.children}
      </div>
    </Link>
  </li>
)
export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <nav
      css={css`
        position: relative;
        background-color: var(--bg-primary);
        transition: width 600ms ease;
        width: 100%;
        display: flex;
        padding: 0 1rem;
      `}
    >
      <ul
        css={css`
          list-style: none;
          padding: 0;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          list-style: none;
          float: left;
        `}
      >
        <LogoLink to="/">
          <Icon
            css={css`
              width: 1.5rem;
              min-width: 1.5rem;
            `}
          />
        </LogoLink>
        <div
          css={css`
            border-left: 2px solid #111;
            height: 50%;
          `}
        />
        <ListLink to="/">
          <h3
            css={css`
              padding: 0 2rem;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </ListLink>
      </ul>
      <ul
        css={css`
          list-style: none;
          padding: 0 0 0 4rem;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          list-style: none;
        `}
      >
        <ListLink to="/">
          <h4>Home</h4>
        </ListLink>
        <ListLink to="/cv">
          <h4
            css={css`
              margin-left: 1rem;
            `}
          >
            CV
          </h4>
        </ListLink>
      </ul>
    </nav>
  )
}
