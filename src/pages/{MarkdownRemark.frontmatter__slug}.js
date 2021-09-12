import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="min-h-screen flex">
      <div className="my-auto">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>

        <GatsbyImage
          className="rounded-sm"
          alt={frontmatter.title}
          image={
            frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
        />

        <div
          className="text-black"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featureImage {
          childImageSharp {
            gatsbyImageData(height: 600)
          }
        }
        slug
        title
      }
    }
  }
`;
