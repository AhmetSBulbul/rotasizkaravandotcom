import React from "react";

import * as styles from "./index.module.css";
import {
  Link,
  StaticQuery,
  graphql,
} from "gatsby";

import {
  StaticImage,
  getImage,
  GatsbyImage,
} from "gatsby-plugin-image";
import useSlide from "../../hooks/useSlide";
import cn from "classnames";
import Dropdown from "../Dropdown";

export default function HeroNew({ children }) {
  const [currIndex] = useSlide(6000, 7);
  return (
    <div className={styles.base}>
      <StaticQuery
        query={graphql`
          query {
            allFile(
              filter: {
                absolutePath: {
                  regex: "//backgrounds//"
                }
              }
            ) {
              edges {
                node {
                  childImageSharp {
                    id
                    gatsbyImageData(
                      layout: CONSTRAINED
                      width: 1280
                      height: 840
                    )
                  }
                  name
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            {data.allFile.edges.map(
              ({ node }, index) => {
                const isIt = index === currIndex;
                console.log({ currIndex });
                const image = getImage(node);
                return (
                  <div
                    key={
                      index.toString() +
                      "imageWrap"
                    }
                    className={cn([
                      styles.background,
                      isIt &&
                        styles.backgroundActive,
                    ])}
                  >
                    <GatsbyImage
                      key={node.id}
                      imgClassName={
                        styles.gatsbyImage
                      }
                      alt={node.name}
                      image={image}
                    />
                  </div>
                );
              }
            )}
          </>
        )}
      />
      <div className={styles.foreground}>
        <Dropdown>
          <a href="#">İşlerimiz</a>
          <a href="#">Kayıp Eşya Bürosu</a>
          <a href="#">Kayıp Eşya Bürosu</a>
          <a href="#">Kayıp Eşya Bürosu</a>
        </Dropdown>
      </div>
    </div>
  );
}
