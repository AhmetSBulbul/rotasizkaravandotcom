import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./work.module.css";
import { Pages } from "../constants";
import { WithIcon as ButtonWithIcon } from "../components/buttons";
import RotasizImage from "../components/RotasizImage";
import {
  LeftArrow,
  RightArrow,
} from "../components/icons/solid";
import SEO from "../components/seo";

export default function WorkPostTemplate({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { next, prev } = pageContext;
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  const socialImg = post.frontmatter
    .socialFeatured
    ? post.frontmatter.socialFeatured
        .childImageSharp.resize
    : null; // data.markdownRemark holds your post data
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        pathname={post.frontmatter.slug}
        image={socialImg}
        description={
          post.frontmatter.excerpt || post.excerpt
        }
      />
      <div className="pageLead">
        <GatsbyImage
          className="pageLeadImg"
          alt={post.frontmatter.title}
          image={
            post.frontmatter.featureImage
              .childImageSharp.gatsbyImageData
          }
        />
        <div className="pageLeadTitleBox">
          <h1 className="font-display text-xl text-center">
            {post.frontmatter.title}
          </h1>
        </div>
      </div>
      <div className="flex flex-col mt-4 px-4 gap-y-4">
        <span className="font-body text-gray text-left">
          {post.frontmatter.date}
        </span>
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
                <RotasizImage
                  className="block my-4"
                  imgData={
                    post.frontmatter.gallery[
                      index
                    ]
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
          <ButtonWithIcon
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
          </ButtonWithIcon>
          <ButtonWithIcon
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
          </ButtonWithIcon>
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
      excerpt(pruneLength: 160)
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
        socialFeatured: featureImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
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
