const path = require("path");

exports.createPages = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(
    `src/templates/blog-post.js`
  );

  const workPostTemplate = path.resolve(
    `src/templates/work-post.js`
  );

  const resultBlog = await graphql(`
    query BlogPostAll {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//blog//" }
        }
        sort: {
          order: DESC
          fields: frontmatter___date
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (resultBlog.errors) {
    reporter.panicOnBuild(
      `Error while running BlogPostAll query.`
    );
    return;
  }

  const resultWorks = await graphql(`
    query WorkPostAll {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//works//" }
        }
        sort: {
          order: DESC
          fields: frontmatter___date
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (resultWorks.errors) {
    reporter.panicOnBuild(
      `Error while running WorkPostAll query.`
    );
    return;
  }

  resultBlog.data.allMarkdownRemark.edges.forEach(
    ({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    }
  );

  resultWorks.data.allMarkdownRemark.edges.forEach(
    ({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: workPostTemplate,
        context: {}, // additional data can be passed via context
      });
    }
  );
};
