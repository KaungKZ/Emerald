// 4/46/39
const path = require("path");
const { graphql } = require("gatsby");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  let allItems = [];

  const result = await graphql(`
    {
      bd_items: allContentfulBestDeals {
        nodes {
          slug
        }
      }
      bs_items: allContentfulBestSellers {
        nodes {
          slug
        }
      }
    }
  `);

  allItems.push(...result.data.bs_items.nodes, ...result.data.bd_items.nodes);

  allItems.forEach(node => {
    createPage({
      path: `/product/${node.slug}`,
      component: path.resolve("src/template/TemplateItem.jsx"),
      context: {
        slug: node.slug,
      },
    });
  });
};
