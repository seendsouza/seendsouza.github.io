import React from "react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import seen from "../../content/assets/seen-alpha.png"

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
      url: "https://storage.googleapis.com/seendsouza-bucket-0/sean-dsouza-resume.pdf",
      username: "Sean D'Souza",
    },
  ]
  const posts = data.allMarkdownRemark.edges
  return (
    <>
      <Layout>
        <div
          css={css`
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            margin-left: auto;
            margin-right: auto;
            padding: 4em 0;
          `}
        >
          <div
            style={{
              flex: "1 300px",
            }}
          >
            <img
              src={seen}
              alt={"Sean D'Souza"}
              style={{
                objectFit: "cover",
                margin: 0,
              }}
            />
          </div>
          <div
            style={{
              flex: "1 300px",
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "4em",
            }}
          >
            <div>
              <h1>Hi. I'm Sean.</h1>
              <h2>I love to create cool stuff.</h2>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <h1
            style={{
              display: "inline-block",
            }}
          >
            Useful Links
          </h1>
          <h4>{localData.length} Links</h4>
          <SocialLinks data={localData} />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <>
                <hr />
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
                    <small>
                      {node.frontmatter.date} • {node.timeToRead} min read
                    </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </article>
              </>
            )
          })}
          <hr />
        </div>
      </Layout>
    </>
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
          timeToRead
        }
      }
    }
  }
`
