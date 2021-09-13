import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <div className="h-1/4 w-screen flex">
        <GatsbyImage
          className="rounded-sm object-cover w-full"
          alt={frontmatter.title}
          image={
            frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
        />
      </div>
      <div className="flex flex-col mt-4 px-4 gap-y-4">
        <span className="font-body text-gray-500 text-left">
          {frontmatter.date}
        </span>
        <h1 className="font-display text-xl text-center">
          {frontmatter.title}
        </h1>

        <div
          className="text-black font-body font-medium text-justify"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </>
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
