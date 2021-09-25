import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import ThemeButton from "../ThemeButton";

const PostLink = ({ post }) => (
  <div className={styles.container}>
    <div className={styles.featuredImage}>
      <GatsbyImage
        className="w-full border-4 border-white"
        key={post.id}
        image={
          post.frontmatter.featureImage
            .childImageSharp.gatsbyImageData
        }
        alt={post.frontmatter.slug}
      />
      <span className={styles.dateField}>
        {post.frontmatter.date}
      </span>
    </div>
    <div className={styles.body}>
      <h2>{post.frontmatter.title}</h2>
      <p>{post.excerpt}</p>
    </div>
    <ThemeButton
      to={post.frontmatter.slug}
      secondary
      className="ml-auto mr-4 mt-auto transform translate-y-1/2 bg-white border-none"
    >
      Devamını Oku
    </ThemeButton>
  </div>
);

export default PostLink;
