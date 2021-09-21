import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

const PostLink = ({ post }) => (
  <Link
    to={post.frontmatter.slug}
    className={styles.link}
  >
    <div className={styles.container}>
      <div className={styles.featuredImage}>
        <GatsbyImage
          className="w-full"
          key={post.id}
          image={
            post.frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
          alt={post.frontmatter.slug}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.dateField}>
          {post.frontmatter.date}
        </span>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </div>
  </Link>
);

export default PostLink;
