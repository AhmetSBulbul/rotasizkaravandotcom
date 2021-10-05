import React from "react";

import { StaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.css";
import cn from "classnames";
import { Pages } from "../../constants";
import RotasizImage from "../RotasizImage";
import GridGallery from "../GridGallery/GridGallery";

import ThemeButton from "../ThemeButton";

function SectionRotasizGallery({ className }) {
  return (
    <div
      className={cn([styles.wrapper, className])}
    >
      <StaticQuery
        query={graphql`
          query GetShowroomImages {
            allFile(
              filter: {
                absolutePath: {
                  regex: "//showroom//"
                }
              }
            ) {
              totalCount
              edges {
                node {
                  name
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      width: 748
                      height: 748
                    )
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <GridGallery data={data} />
          </>
        )}
      />
    </div>
  );
}

export default SectionRotasizGallery;
