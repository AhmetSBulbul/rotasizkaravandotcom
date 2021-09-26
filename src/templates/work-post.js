import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./work.module.css";
import { Pages } from "../constants";
import ThemeButton from "../components/ThemeButton";
import {
  LeftArrow,
  RightArrow,
} from "../components/icons/solid-icons";

export default function WorkPostTemplate({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  return (
    <>
      <div className="flex">
        <GatsbyImage
          className="rounded-sm object-cover w-full max-h-96"
          alt={post.frontmatter.title}
          image={
            post.frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
        />
      </div>
      <div className="flex flex-col mt-4 px-4 gap-y-4">
        <span className="font-body text-gray-500 text-left">
          {post.frontmatter.date}
        </span>
        <h1 className="font-display text-xl text-center">
          {post.frontmatter.title}
        </h1>
        <div className="flex flex-wrap space-x-4 justify-center">
          <h4>{post.frontmatter.make}</h4>
          <h4>{post.frontmatter.model}</h4>
          <h4>{post.frontmatter.volume}m3</h4>
          <h4>{post.frontmatter.year}</h4>
        </div>

        <div
          className="text-black font-body font-medium text-justify"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />

        <div className={styles.album}>
          {post.frontmatter.gallery.map(
            ({ childImg }, index) => {
              return (
                <GatsbyImage
                  className="block my-4"
                  image={
                    post.frontmatter.gallery[
                      index
                    ].childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.frontmatter.title}
                  key={
                    post.frontmatter.gallery[
                      index
                    ].childImageSharp.id
                  }
                />
              );
            }
          )}
        </div>
        <div className="flex flex-row justify-between space-x-8 mt-12">
          <ThemeButton
            secondary
            className="flex flex-row items-center"
            to={
              prev != null
                ? prev.frontmatter.slug
                : Pages.islerimiz
            }
          >
            <LeftArrow className="mr-4" />
            {prev != null
              ? prev.frontmatter.title
              : "İşlerimiz"}
          </ThemeButton>
          <ThemeButton
            secondary
            className="flex flex-row items-center"
            to={
              next != null
                ? next.frontmatter.slug
                : Pages.islerimiz
            }
          >
            {next != null
              ? next.frontmatter.title
              : "İşlerimiz"}
            <RightArrow className="ml-4" />
          </ThemeButton>
        </div>
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query WorkPostByPath($path: String!) {
    markdownRemark(
      frontmatter: { slug: { eq: $path } }
    ) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        featureImage {
          childImageSharp {
            gatsbyImageData(
              height: 600
              transformOptions: {
                fit: COVER
                cropFocus: CENTER
              }
              layout: CONSTRAINED
            )
            id
          }
        }
        slug
        title
        make
        tags
        model
        volume
        year
        gallery {
          childImageSharp {
            gatsbyImageData(
              width: 400
              layout: CONSTRAINED
              transformOptions: {
                fit: CONTAIN
                cropFocus: CENTER
              }
            )
            id
          }
        }
      }
    }
  }
`;
