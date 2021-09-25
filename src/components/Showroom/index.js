import React, { useState } from "react";
import * as styles from "./index.module.css";
import { StaticQuery, graphql } from "gatsby";
import * as SolidIcon from "../icons/solid-icons";
import IconButton from "../IconButton";
import ThemeButton from "../ThemeButton";
import cn from "classnames";

import {
  StaticImage,
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";

function Label({ name, children }) {
  return (
    <p>
      <span className="font-display font-black text-primary mr-2">
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
        currIndex === index
          ? styles.postActive
          : currIndex > index &&
            styles.postPrevious,
      ])}
    >
      <div className={styles.postImage}>
        <GatsbyImage
          image={
            post.frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
          alt=""
        />
      </div>
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
          className="ml-auto mt-4"
        >
          Devamını Oku
        </ThemeButton>
      </div>
    </div>
  );
}

function Cover({ currIndex }) {
  return (
    <div
      className={cn([
        styles.post,
        currIndex === 3 && styles.postActive,
      ])}
    >
      <div className={styles.postImage}>
        <StaticImage
          src="../../images/rotasizlar.jpg"
          alt=""
        />
        <h5 className={styles.coverPhotoAlt}>
          03 Temmuz 2021 - Rotasızlar
        </h5>
      </div>
      <div className={styles.postBody}>
        <h3>Daha Fazlası</h3>
        <p>
          Keyifle her gün bir yeni hayale ortak
          oluyoruz. Bütün bu hayallerin
          gerçekleşme süreçlerini işlerimiz
          sayfasından inceleyebilir ve size en
          uygun karavan için fikirler
          edinebilirsiniz.
        </p>
        <ThemeButton
          to="/islerimiz"
          className="ml-auto mt-4"
        >
          İşlerimizi İnceleyin
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
          <Cover currIndex={currIndex} />
        </>
      )}
    />
  );
}

export default function Showroom({}) {
  const [currIndex, setIndex] = useState(0);

  const nextIndex = () => {
    return setIndex((currIndex + 1) % 4);
  };

  const prevIndex = () => {
    return setIndex((currIndex + 3) % 4);
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
