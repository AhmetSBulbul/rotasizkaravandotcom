import React from "react";

import * as styles from "./index.module.css";
import { StaticQuery, graphql } from "gatsby";

import PostLink from "../PostLink";

export default function RecentPublished({
  children,
}) {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data) => (
        <div className={styles.container}>
          <h3 className={styles.sectionTitle}>
            Son Paylaşılanlar
          </h3>
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
