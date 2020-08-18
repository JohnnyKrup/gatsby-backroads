/**
 * documentation
 * https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages
 *
 * this file is needed to setup pages programmatically
 *
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allAirtable(filter: { table: { eq: "Tours" } }) {
        nodes {
          tourData: data {
            slug
          }
        }
      }
      posts: allAirtable(filter: { table: { eq: "Posts" } }) {
        nodes {
          postData: data {
            slug
          }
        }
      }
    }
  `)

  console.log(data)

  data &&
    data.allAirtable.nodes.forEach(tour => {
      createPage({
        path: `tours/${tour.tourData.slug}`,
        component: path.resolve("./src/templates/tour-template.js"),
        context: { slug: tour.tourData.slug },
      })
    })

  data &&
    data.posts.nodes.forEach(post => {
      createPage({
        path: `blog/${post.postData.slug}`,
        component: path.resolve("./src/templates/blog-template.js"),
        context: {
          slug: post.postData.slug,
        },
      })
    })

  // amount of posts
  const posts = data.posts.nodes

  // posts per page
  const postsPerPage = 3

  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  // const pages = Array.from({ length: numPages })
  // console.log("************")
  // console.log(pages)
  // console.log("************")

  /**
   * setup for pagination
   */
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
