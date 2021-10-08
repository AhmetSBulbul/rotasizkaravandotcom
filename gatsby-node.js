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

  const result = await graphql(`
    query GetPosts {
      blog: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//blog//" }
        }
        sort: {
          order: DESC
          fields: frontmatter___date
        }
        limit: 0
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
      works: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//works//" }
        }
        sort: {
          order: DESC
          fields: frontmatter___date
        }

        limit: 0
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GetPosts GraphiQL query.`
    );
    return;
  }

  const blogPosts = result.data.blog.edges;
  const workPosts = result.data.works.edges;

  blogPosts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        prev:
          index === 0
            ? null
            : blogPosts[index - 1].node,
        next:
          index === blogPosts.length - 1
            ? null
            : blogPosts[index + 1].node,
      }, // additional data can be passed via context
    });
  });

  workPosts.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: workPostTemplate,
      context: {
        prev:
          index === 0
            ? null
            : workPosts[index - 1].node,
        next:
          index === workPosts.length - 1
            ? null
            : workPosts[index + 1].node,
      }, // additional data can be passed via context
    });
  });
};
