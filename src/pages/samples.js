import React from "react"
import Layout from "../components/Layout"
import Button from "../examples/Button"

const samples = () => {
  return (
    <Layout>
      <div>
        <Button big>button one</Button>
        <Button color="yellow">button two</Button>
        <Button color="#f15025">button three</Button>
      </div>
    </Layout>
  )
}

export default samples
