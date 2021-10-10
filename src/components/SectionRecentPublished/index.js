import React from "react";

//import * as styles from "./index.module.css";
import { StaticQuery, graphql } from "gatsby";
import { Pages } from "../../constants";
import { ContinueTo } from "../buttons";

import PostLink from "../PostLink";

export default function SectionRecentPublished() {
  return (
    <StaticQuery
      query={graphql`
        query GetBlogPosts {
          allMarkdownRemark(
            filter: {
              fileAbsolutePath: {
                regex: "//blog//"
              }
            }
            sort: {
              order: DESC
              fields: [frontmatter___date]
            }
            limit: 3
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
                      gatsbyImageData(
                        layout: CONSTRAINED
                        width: 748
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="section-wrap flex flex-col ">
          <h3 className="sub-title text-center">
            Blog
          </h3>
          <h2 className="big-title text-center">
            Son Paylaşılanlar
          </h2>
          <div className="wrap-simple-row simple-row-3 mt-12">
            {data.allMarkdownRemark.edges.map(
              ({ node }) => {
                return (
                  <PostLink
                    key={node.id}
                    post={node}
                  />
                );
              }
            )}
          </div>

          <ContinueTo
            className="ml-auto mt-4"
            to={Pages.blog}
          >
            Blog
          </ContinueTo>
        </div>
      )}
    />
  );
}
