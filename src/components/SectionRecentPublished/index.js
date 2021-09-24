import React from "react";

import * as styles from "./index.module.css";
import { StaticQuery, graphql } from "gatsby";

import PostLink from "../PostLink";

export default function SectionRecentPublished({
  children,
}) {
  return (
    <StaticQuery
      query={graphql`
        query {
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
                      gatsbyImageData(height: 300)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={styles.container}>
          <div className={styles.postList}>
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
        </div>
      )}
    />
  );
}
