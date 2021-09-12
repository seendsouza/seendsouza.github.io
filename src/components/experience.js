import React from "react"
import { rhythm } from "../utils/typography"
import Tag from "./tag"
import { css } from "@emotion/core"

export default function Experience({
  topLeftContent,
  topRightContent,
  bottomLeftContent,
  bottomRightContent,
  listItems,
  tags,
}) {
  return (
    <div
      key={
        topLeftContent +
        topRightContent +
        bottomLeftContent +
        bottomRightContent
      }
      css={css`
        margin-left: auto;
        margin-right: auto;
        margin-bottom: ${rhythm(1)};
        border-style: solid;
        border-radius: ${rhythm(1 / 2)};
        padding: ${rhythm(1 / 2)};
      `}
    >
      <div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h4>{topLeftContent}</h4>
          <h5>{topRightContent}</h5>
        </div>
        {bottomLeftContent && bottomRightContent && (
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <h5>{bottomLeftContent}</h5>
            <h5>{bottomRightContent}</h5>
          </div>
        )}
      </div>
      {listItems.map(listItem => {
        return (
          <div
            key={listItem}
            css={css`
              margin-bottom: ${rhythm(1 / 2)};
            `}
          >
            • {listItem}{" "}
          </div>
        )
      })}
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {tags.map(tag => {
          return <Tag name={tag} key={tag} />
        })}
      </div>
    </div>
  )
}
