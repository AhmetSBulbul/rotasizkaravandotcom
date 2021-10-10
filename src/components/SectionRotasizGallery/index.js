import React from "react";

import { StaticQuery, graphql } from "gatsby";
//import * as styles from "./index.module.css";
//import cn from "classnames";
import GridGallery from "../GridGallery/GridGallery";

function SectionRotasizGallery() {
  return (
    <>
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
                  id
                  name
                  childImageSharp {
                    id
                    gatsbyImageData(
                      layout: CONSTRAINED
                      height: 748
                      width: 748
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
    </>
  );
}

export default SectionRotasizGallery;
