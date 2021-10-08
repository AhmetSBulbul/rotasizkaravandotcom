import React from "react";
import { graphql } from "gatsby";

import { WorksFigure } from "../../components/figures";
import WorkLink from "../../components/WorkLink";
import SEO from "../../components/seo";

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
      <SEO
        title="İşlerimiz"
        pathname="/islerimiz"
      />
      <div className="pageLead">
        <WorksFigure className="pageLeadImg" />
        <div className="pageLeadTitleBox w-full">
          <h1>İşlerimiz</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <h5 className="text-center font-display font-black text-2xl mx-auto my-auto">
          Üzgünüz henüz hiç paylaşım yok.
        </h5>
      </div>
      {/*<div className="section-wrap grid grid-flow-row gap-8 laptop:grid-cols-3">
        {Works}
      </div>*/}
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
