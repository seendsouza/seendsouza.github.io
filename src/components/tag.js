import React from "react"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"

export default function Experience({ name }) {
  return (
    <label
      css={css`
        padding: ${rhythm(1 / 8)} ${rhythm(1 / 2)};

        margin-left: ${rhythm(1 / 4)};
        margin-right: ${rhythm(1 / 4)};
        margin-top: ${rhythm(1 / 4)};
        margin-bottom: ${rhythm(1 / 4)};

        border-width: ${rhythm(1 / 16)};
        border-radius: ${rhythm(1)};
        border-color: var(--text-primary);
        border-style: solid;
        font-size: ${rhythm(1 / 2)};
      `}
    >
      {name}
    </label>
  )
}
