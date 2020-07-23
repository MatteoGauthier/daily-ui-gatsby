import React from "react"
import Layout from "../templates/layout"
// import { graphql } from "gatsby"

function DailyPost({ pageContext }) {
  const { post } = pageContext
  const showcaseImage = post.showcaseImage
  return (
    <Layout>

    <div className="mx-auto container flex">
      <img className="w-1/2 shadow-md rounded" src={showcaseImage[0].url} alt="" />
      <pre className="w-1/2">{JSON.stringify(post, null, 2)}</pre>
    </div>
    <h1 className="text-3xl font-bold">{post.title}</h1>
    </Layout>
  )
}
export default DailyPost
