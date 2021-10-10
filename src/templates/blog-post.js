import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Pages } from "../constants";
import { WithIcon as ButtonWithIcon } from "../components/buttons";
import {
  LeftArrow,
  RightArrow,
} from "../components/icons/solid";
import SEO from "../components/seo";

export default function BlogPostTemplate({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data;
  const socialImg = post.frontmatter
    .socialFeatured
    ? post.frontmatter.socialFeatured
        .childImageSharp.resize
    : null; // data.markdownRemark holds your post data
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        pathname={post.frontmatter.slug}
        image={socialImg}
        description={
          post.frontmatter.excerpt || post.excerpt
        }
      />
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
      <div className="flex flex-col mt-4 px-4 gap-y-4 prose laptop:mx-auto">
        <span className="font-body text-gray text-left">
          {post.frontmatter.date}
        </span>

        <div
          className="text-black font-body font-medium text-justify"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
        <div className="flex flex-row justify-between mt-12">
          <ButtonWithIcon
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
          </ButtonWithIcon>
          <ButtonWithIcon
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
          </ButtonWithIcon>
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
        slug
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featureImage {
          childImageSharp {
            gatsbyImageData(height: 600)
          }
        }
        socialFeatured: featureImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        title
      }
      excerpt(pruneLength: 160)
    }
  }
`;
