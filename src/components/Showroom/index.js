import React, { useState } from "react";
import * as styles from "./index.module.css";
import { StaticQuery, graphql } from "gatsby";
import * as SolidIcon from "../icons/solid-icons";
import IconButton from "../IconButton";
import ThemeButton from "../ThemeButton";
import cn from "classnames";

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

function PostCard({
  children,
  post,
  index,
  currIndex,
}) {
  return (
    <div
      className={cn([
        styles.post,
        currIndex === index && styles.postActive,
      ])}
    >
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
          to={post.frontmatter.slug}
          secondary
          className="ml-auto mt-4"
        >
          Devamını Oku
        </ThemeButton>
      </div>
    </div>
  );
}

function Posts({ currIndex }) {
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
            ({ node }, index) => {
              return (
                <PostCard
                  key={node.id}
                  post={node}
                  index={index}
                  currIndex={currIndex}
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
  const [currIndex, setIndex] = useState(0);

  const nextIndex = () => {
    return setIndex((currIndex + 1) % 3);
  };

  const prevIndex = () => {
    return setIndex((currIndex - 1) % 3);
  };
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionHeader}>
        <h3 className="sub-title">İşlerimiz</h3>
        <h2 className="big-title">
          Mutfağımızda Pişenler
        </h2>
      </div>
      <div className={styles.sectionBody}>
        <Posts currIndex={currIndex} />
      </div>
      <div className={styles.controllerWrap}>
        <IconButton onClick={prevIndex}>
          <SolidIcon.LeftArrow />
        </IconButton>
        <IconButton onClick={nextIndex}>
          <SolidIcon.RightArrow />
        </IconButton>
      </div>
    </div>
  );
}
