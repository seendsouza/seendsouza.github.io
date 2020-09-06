import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { excerpt, timeToRead, html } = post
  const { title, description, date, image } = post.frontmatter
  const imagePath = image || image.childImageSharp.fixed.src
  return (
    <Layout>
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
