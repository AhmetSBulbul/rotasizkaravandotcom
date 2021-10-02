import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/PostLink";
import { StaticImage } from "gatsby-plugin-image";

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(
      (edge) => !!edge.node.frontmatter.date
    ) // You can filter your posts based on some criteria
    .map((edge) => (
      <PostLink
        key={edge.node.id}
        post={edge.node}
      />
    ));

  return (
    <>
      <div className="pageLead">
        <StaticImage
          src="../images/map-notepad.jpg"
          alt=""
          layout="constrained"
          objectFit="cover"
          objectPosition="center"
          className="pageLeadImg"
        />
        <div className="pageLeadTitleBox w-full">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="min-h-screen pt-28 px-4">
        {Posts}
      </div>
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//blog//" }
      }
      sort: {
        fields: frontmatter___date
        order: DESC
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            excerpt
            slug
            title
            featureImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
