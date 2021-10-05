import React from "react";
import { graphql } from "gatsby";

import { WorksFigure } from "../../components/figures";
import WorkLink from "../../components/WorkLink";

const WorksPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Works = edges
    .filter(
      (edge) => !!edge.node.frontmatter.date
    )
    .map((edge) => (
      <WorkLink
        key={edge.node.id}
        post={edge.node}
      />
    ));
  return (
    <>
      <div className="pageLead">
        <WorksFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İşlerimiz</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-3 laptop:gap-x-8 px-mobile laptop:px-wrapper">
        {Works}
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query WorksPageQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//works//" }
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

export default WorksPage;
