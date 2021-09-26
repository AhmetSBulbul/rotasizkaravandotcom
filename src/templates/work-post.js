import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function WorkPostTemplate({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  return (
    <>
      <div className="h-1/4 w-screen flex">
        <GatsbyImage
          className="rounded-sm object-cover w-full"
          alt={post.frontmatter.title}
          image={
            post.frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
        />
      </div>
      <div className="flex flex-col mt-4 px-4 gap-y-4">
        <span className="font-body text-gray-500 text-left">
          {post.frontmatter.date}
        </span>
        <h1 className="font-display text-xl text-center">
          {post.frontmatter.title}
        </h1>
        <h2 className="font-display text-xl text-center">
          {post.frontmatter.make}
        </h2>
        <h2 className="font-display text-xl text-center">
          Next: {next && next.frontmatter.title}
        </h2>
        <h2 className="font-display text-xl text-center">
          Prev: {prev && prev.frontmatter.title}
        </h2>

        <div
          className="text-black font-body font-medium text-justify"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query WorkPostByPath($path: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $path } }
    ) {
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
        make
      }
    }
  }
`;
