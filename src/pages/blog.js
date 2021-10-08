import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/PostLink";
import { BlogFigure } from "../components/figures";
import SEO from "../components/seo";

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
      <SEO title="Blog" pathname="/blog" />
      <div className="pageLead">
        <BlogFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <h5 className="text-center font-display font-black text-2xl mx-auto my-auto">
          Üzgünüz henüz hiç paylaşım yok.
        </h5>
      </div>
      {/*<div className="section-wrap grid grid-flow-row gap-8 laptop:grid-cols-3">
        {Posts}
  </div>*/}
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPageQuery {
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
