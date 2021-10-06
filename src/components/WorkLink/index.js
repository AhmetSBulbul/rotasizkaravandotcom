import React from "react";

import * as styles from "./index.module.css";

import { CardPost, CardLink } from "../cards";

const WorkLink = ({ post }) => {
  return (
    <CardLink to={post.frontmatter.slug}>
      <CardPost
        imageData={post.frontmatter.featureImage}
        imageAlt={post.frontmatter.slug}
        key={post.id}
      >
        <div className={styles.body}>
          <h2>{post.frontmatter.title}</h2>
          <span className={styles.dateField}>
            {post.frontmatter.date}
          </span>
        </div>
      </CardPost>
    </CardLink>
  );
};

export default WorkLink;
