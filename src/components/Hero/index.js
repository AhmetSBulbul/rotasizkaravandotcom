import React from "react";

import * as styles from "./index.module.css";
import {
  Link,
  StaticQuery,
  graphql,
} from "gatsby";

import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image";
import cn from "classnames";
import useSlide from "../../hooks/useSlide";

export default function Hero({ children }) {
  const [currIndex] = useSlide(7000, 7);

  return (
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
                    transformOptions: {
                      cropFocus: CENTER
                      fit: CONTAIN
                    }
                  )
                }
                name
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className={styles.base}>
          <div className={styles.background}>
            {data.allFile.edges.map(
              ({ node }, index) => {
                const isIt = index === currIndex;
                console.log({ currIndex });
                const image = getImage(node);
                return (
                  <div
                    className={cn([
                      styles.backgroundImage,
                      isIt && styles.sliderActive,
                    ])}
                  >
                    <GatsbyImage
                      imgClassName={
                        styles.gatsbyImage
                      }
                      key={node.id}
                      alt={node.name}
                      image={image}
                    />
                  </div>
                );
              }
            )}
          </div>
          <div className={styles.innerContainer}>
            <div
              className={styles.contentWrapper}
            >
              <h2 className={styles.display}>
                İSTEĞİNİZE VE İHTİYAÇLARINIZA
                YÖNELİK KARAVANLAR ÜRETİYORUZ.
              </h2>
              <div
                className={styles.buttonWrapper}
              >
                <Link
                  to="/islerimiz"
                  className={styles.primaryBtn}
                >
                  İŞLERİMİZİ İNCELEYİN
                </Link>
                <Link
                  to="/kurumsal"
                  className={styles.secondaryBtn}
                >
                  HAKKIMIZDA
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}
