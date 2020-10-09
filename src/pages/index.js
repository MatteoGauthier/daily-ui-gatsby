import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../assets/styles/master.css"
import Layout from "../templates/layout"
import DashBoard from "../components/Dashboard"
export default function Home() {
  const data = useStaticQuery(graphql`
    {
      gcms {
        dayDesigns {
          id
          day
          title
          screenshots {
            id
            url
            handle
          }
          plateforms
          tags
          showcaseImage {
            id
            url
            handle
            width
            height
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <DashBoard searches={data.gcms.dayDesigns} />

      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}
