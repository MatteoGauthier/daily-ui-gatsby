const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      query AllPosts {
        gcms {
          dayDesigns(orderBy: day_ASC) {
            day
            id
            title
            updatedAt
            screenshots {
              url
            }
            showcaseImage {
              url
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    const items = result.data.gcms.dayDesigns
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    items.forEach(node => {
      createPage({
        path: `/${node.day}`,
        component: path.resolve(`./src/templates/daily-post.js`),
        context: { post: node },
      })
    })
  })
}
