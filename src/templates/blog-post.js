import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Pages } from "../constants";
import ThemeButton from "../components/ThemeButton";
import {
  LeftArrow,
  RightArrow,
} from "../components/icons/solid-icons";

export default function BlogPostTemplate({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  return (
    <>
      <div className="pageLead">
        <GatsbyImage
          className="pageLeadImg"
          alt={post.frontmatter.title}
          image={
            post.frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
        />
        <div className="pageLeadTitleBox">
          <h1 className="font-display text-xl text-center">
            {post.frontmatter.title}
          </h1>
        </div>
      </div>
      <div className="flex flex-col mt-4 px-4 gap-y-4">
        <span className="font-body text-gray-500 text-left">
          {post.frontmatter.date}
        </span>

        <div
          className="text-black font-body font-medium text-justify"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
        <div className="flex flex-row justify-between mt-12">
          <ThemeButton
            secondary
            className="flex flex-row items-center"
            to={
              prev != null
                ? prev.frontmatter.slug
                : Pages.blog
            }
          >
            <LeftArrow className="mr-4" />
            {prev != null
              ? prev.frontmatter.title
              : "Blog"}
          </ThemeButton>
          <ThemeButton
            secondary
            className="flex flex-row items-center"
            to={
              next != null
                ? next.frontmatter.slug
                : Pages.blog
            }
          >
            {next != null
              ? next.frontmatter.title
              : "Blog"}
            <RightArrow className="ml-4" />
          </ThemeButton>
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
      }
    }
  }
`;
