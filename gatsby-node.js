// 4/46/39
const path = require("path");
// const { graphql } = require("gatsby");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // let allItems = [];

  const result = await graphql(`
    {
      items: allContentfulAllProducts {
        nodes {
          id
        }
      }
    }
  `);

  // allItems.push(...result.data.bs_items.nodes, ...result.data.bd_items.nodes);
  // console.log(data.res.nodes);`

  result.data.items.nodes.forEach(node => {
    // console.log(node);
    createPage({
      path: `/product/${node.id}`,
      component: path.resolve("src/template/TemplateItem.jsx"),
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
