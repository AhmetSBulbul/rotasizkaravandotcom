import React from "react";

import * as styles from "./index.module.css";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import { Link } from "gatsby";

const PostLink = ({ post }) => {
  const img = getImage(
    post.frontmatter.featureImage
  );
  return (
    <div className={styles.container}>
      <GatsbyImage
        className={styles.featureImage}
        key={post.id}
        objectFit="cover"
        image={img}
        alt={post.frontmatter.slug}
      />

      <div className={styles.body}>
        <h2>{post.frontmatter.title}</h2>
        <span className={styles.dateField}>
          {post.frontmatter.date}
        </span>
        <Link
          className="link ml-auto mt-4 mb-4"
          to={post.frontmatter.slug}
        >
          Devamını Oku
        </Link>
      </div>
    </div>
  );
};

export default PostLink;
