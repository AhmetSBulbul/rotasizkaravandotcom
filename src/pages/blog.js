import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/PostLink";

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
    <div className="min-h-screen pt-28 px-4">
      {Posts}
    </div>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        order: DESC
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            slug
            title
            excerpt
            featureImage {
              childImageSharp {
                gatsbyImageData(height: 300)
              }
            }
          }
        }
      }
    }
  }
`;
