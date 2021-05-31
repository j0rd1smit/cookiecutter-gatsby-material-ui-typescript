/* eslint-disable */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage, createRedirect } = actions
  createPage({
    path: "/",
    component: path.resolve(`./src/templates/index_page/index.tsx`),
    context: {
      slug: "/",
    },
  })
}
