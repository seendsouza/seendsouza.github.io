import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const SocialLinks = ({ data }) => {
  return data.map(node => (
    <div key={node.url} style={{ paddingBottom: "2em" }}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        {node.title}{" "}
        <span
          style={{
            color: "#bbb",
          }}
        >
          — {node.username}
        </span>
      </h3>
      <a href={node.url} style={{}}>
        {node.url}
      </a>
    </div>
  ))
}

export default function Home() {
  const data = [
    {
      icon: "fa-github",
      title: "GitHub",
      url: "https://github.com/seendsouza",
      username: "seendsouza",
    },
    {
      icon: "fa-linkedin",
      title: "LinkedIn",
      url: "https://linkedin.com/in/seendsouza",
      username: "seendsouza",
    },
    {
      icon: "fa-paper",
      title: "Resume",
      url:
        "https://storage.googleapis.com/seendsouza-bucket-0/sean-dsouza-resume.pdf",
      username: "Sean D'Souza",
    },
  ]
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          style={{
            display: "inline-block",
          }}
        >
          Site Under Construction
        </h1>
        <h4>{data.length} Links</h4>
        <SocialLinks data={data} />
        <hr />
        <p>Site made with Gatsby</p>
      </div>
    </Layout>
  )
}
