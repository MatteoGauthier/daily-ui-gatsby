import React from "react"
import Layout from "../templates/layout"
import GraphImg from "graphcms-image"
// import { graphql } from "gatsby"

function DailyPost({ pageContext }) {
  const { post } = pageContext
  const showcaseImage = post.showcaseImage
  console.log(showcaseImage[0])
  return (
    <Layout>
      <div className="container flex mx-auto">
        <div className="w-1/2 rounded shadow-md">
          <GraphImg
            image={showcaseImage[0]}
            alt=""
            withWebp={true}
            transforms={["quality=value:100"]}
            fit="max"
            maxWidth={showcaseImage[0].width}
          />
        </div>
        <pre className="w-1/2">{JSON.stringify(post, null, 2)}</pre>
      </div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
    </Layout>
  )
}
export default DailyPost
