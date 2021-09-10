import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="bg-blue-300 text-white font-body font-semibold w-5/6 h-32 m-4 rounded-md p-4">
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} (
      {post.frontmatter.date})
    </Link>
  </div>
);

export default PostLink;
