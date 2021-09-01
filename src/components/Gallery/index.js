import React from "react";
import * as styles from "./index.module.css";
import { Link } from "gatsby";

import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

const RotasizGallery = ({ photos }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className="font-display text-2xl text-right text-black">
        İŞLERİMİZ
      </h3>
      <div className={styles.gallery}>
        {photos.edges.map(({ node }) => {
          const image = getImage(node);
          return (
            <GatsbyImage
              className={styles.photo}
              key={node.id}
              alt={node.name}
              image={image}
            />
          );
        })}
      </div>
      <div className="h-2 w-full bg-blue-300 flex flex-auto">
        <div className="flex-1" />
        <div className="bg-yellow-600 flex-1" />
        <div className="flex-1" />
        <div className="flex-1" />
        <div className="flex-1" />
      </div>
      <div className={styles.controllerWrapper}>
        <button className="button-primary bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <Link
          to="/photoGallery"
          className="button-primary text-center flex-grow"
        >
          Foto GALERİ
        </Link>
        <button className="button-primary bg-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RotasizGallery;
