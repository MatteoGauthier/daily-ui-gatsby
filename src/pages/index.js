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
        }
      }
    }
  `)
  return (
    <Layout>
      <DashBoard searches={data.gcms.dayDesigns}/>

      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}
