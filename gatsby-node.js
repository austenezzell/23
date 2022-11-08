const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  // DATA FROM JSON
  const { data } = await graphql(`
    query workDtl {
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `)

  data.allProjectsJson.nodes.forEach(node => {
    actions.createPage({
      path: '/work/' + node.slug,
      component: path.resolve('./src/templates/work-dtl.js'),
      context: { slug: node.slug }
    })
  }) 
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
