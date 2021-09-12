import React from "react";
import * as styles from "./index.module.css";
import { Link } from "gatsby";
//import Lightbox from "../Lightbox";
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import ImageCarousel from "../ImageCarousel";

const RotasizGallery = ({ photos }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className="font-display text-2xl text-right text-black">
          İŞLERİMİZ
        </h3>
        <div className={styles.gallery}>
          <ImageCarousel>
            {photos.edges.map(({ node }) => {
              const image = getImage(node);
              return (
                <div
                  key={node.id}
                  className={styles.photoWrapper}
                >
                  <button>
                    <GatsbyImage
                      className={styles.photo}
                      alt={node.name}
                      image={image}
                    />
                  </button>
                </div>
              );
            })}
          </ImageCarousel>
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
            to="/foto-galeri"
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
    </>
  );
};

export default RotasizGallery;
