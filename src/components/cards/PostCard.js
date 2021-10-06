import React from "react";
import cn from "classnames";
import {
  postCard as style,
  postCardBody,
  postCardImage,
} from "./index.module.css";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

const PostCard = ({
  children,
  imageData,
  imageAlt = "",
  className,
  ...props
}) => {
  const img = getImage(imageData);
  return (
    <div className={cn([style, className])}>
      <GatsbyImage
        image={img}
        alt={imageAlt}
        objectFit="cover"
        className={postCardImage}
        {...props}
      />
      <div className={postCardBody}>
        {children}
      </div>
    </div>
  );
};

export default PostCard;
