import React from "react";
import { graphql } from "gatsby";

import { WorksFigure } from "../../components/figures";

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
      <h3
        className="big-title"
        key={edge.node.id}
      >
        {edge.node.frontmatter.title}
      </h3>
    ));
  return (
    <>
      <div className="pageLead">
        <WorksFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İşlerimiz</h1>
        </div>
      </div>
      <div className="flex flex-col my-8 px-mobile laptop:px-wrapper">
        {Works}
      </div>
    </>
  );
};

export const pageQuery = graphql`
  query GetWorksAll {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//works//" }
      }
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
            make
            model
            year
            volume
            featureImage {
              childImageSharp {
                id
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 800
                  height: 600
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default WorksPage;
