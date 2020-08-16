import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"

/**
 * we created the Banner as a extra component, so that we can use it also elswhere
 * not only in the Hero component
 */
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            back home
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
