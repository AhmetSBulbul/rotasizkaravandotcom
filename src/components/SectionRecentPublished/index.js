import React from "react";

import * as styles from "./index.module.css";
import {
  StaticQuery,
  graphql,
  Link,
} from "gatsby";
import { Pages } from "../../constants";
import { RightArrow } from "../icons/solid";

import PostLink from "../PostLink";

export default function SectionRecentPublished({
  children,
}) {
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
        <div className={styles.wrapper}>
          <h3 className="sub-title">Blog</h3>
          <h2 className="big-title">
            Son Paylaşılanlar
          </h2>
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

          <Link
            to={Pages.blog}
            className="big-link text-black mt-16 ml-auto transition-opacity hover:opacity-60"
          >
            Blog{" "}
            <RightArrow className="inline-block text-brand" />
          </Link>
        </div>
      )}
    />
  );
}
