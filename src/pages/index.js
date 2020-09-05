import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

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

const Home = ({ data }) => {
  const localData = [
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
  const posts = data.allMarkdownRemark.edges
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
        <h4>{localData.length} Links</h4>
        <SocialLinks data={localData} />
        <hr />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
        <hr />
        <p>Site made with Gatsby</p>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
