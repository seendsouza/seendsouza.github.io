import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { excerpt, timeToRead, html } = post
  const { title, description, date, image } = post.frontmatter
  const imagePath = image || image.childImageSharp.fixed.src
  return (
    <Layout>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <SEO
          title={title}
          description={description || excerpt}
          image={imagePath}
        />
        <div>
          <header>
            <h1>{title}</h1>
            <p>
              {date} • {timeToRead} min read
            </p>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
      excerpt
      timeToRead
    }
  }
`
