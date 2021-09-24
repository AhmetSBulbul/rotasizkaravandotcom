import React from "react";
import * as styles from "./index.module.css";
import { StaticQuery, graphql } from "gatsby";
import * as SolidIcon from "../icons/solid-icons";
import IconButton from "../IconButton";
import ThemeButton from "../ThemeButton";

import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

function Label({ name, children }) {
  return (
    <p>
      <span className="font-medium text-secondary mr-2">
        {name}:
      </span>
      {children}
    </p>
  );
}

function PostCard({ children, post, excerpt }) {
  return (
    <div className={styles.post}>
      <GatsbyImage
        className={styles.postImage}
        image={
          post.frontmatter.featureImage
            .childImageSharp.gatsbyImageData
        }
        alt=""
      />
      <div className={styles.postBody}>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        <div className={styles.technicDetails}>
          <Label name="Marka">
            {post.frontmatter.make}
          </Label>
          <Label name="Model">
            {post.frontmatter.model}
          </Label>
          <Label name="Hacim">
            {post.frontmatter.volume}
          </Label>
          <Label name="Üretim Yılı">
            {post.frontmatter.year}
          </Label>
        </div>
        <ThemeButton
          secondary
          className="ml-auto mt-4"
        >
          Devamını Oku
        </ThemeButton>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            filter: {
              fileAbsolutePath: {
                regex: "//works//"
              }
            }
            sort: {
              order: DESC
              fields: [frontmatter___date]
            }
            limit: 1
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
      `}
      render={(data) => (
        <>
          {data.allMarkdownRemark.edges.map(
            ({ node }) => {
              return (
                <PostCard
                  key={node.id}
                  post={node}
                />
              );
            }
          )}
        </>
      )}
    />
  );
}

export default function Showroom({}) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <h3 className="sub-title">İşlerimiz</h3>
        <h2 className="big-title">
          Mutfağımızda Pişenler
        </h2>
      </div>
      <div className={styles.sectionBody}>
        <Posts />
      </div>
      <div className={styles.controllerWrap}>
        <IconButton>
          <SolidIcon.LeftArrow />
        </IconButton>
        <IconButton>
          <SolidIcon.RightArrow />
        </IconButton>
      </div>
    </div>
  );
}
