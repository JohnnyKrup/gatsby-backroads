import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

/**
 * we created the Banner as a extra component, so that we can use it also elswhere
 * not only in the Hero component
 */
export default function error() {
  return (
    <Layout>
      <SEO title="Error 404" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
