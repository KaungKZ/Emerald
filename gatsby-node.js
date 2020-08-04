const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      items: allContentfulAllProducts {
        nodes {
          id
        }
      }
    }
  `);

  result.data.items.nodes.forEach(node => {
    createPage({
      path: `/product/${node.id}`,
      component: path.resolve("src/template/TemplateItem.js"),
      context: {
        slug: node.id,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};
