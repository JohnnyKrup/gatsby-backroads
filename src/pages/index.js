import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const home = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Vexillologist twee biodiesel gochujang godard cray squid kickstarter church-key waistcoat bespoke. Mustache air plant brunch chambray edison bulb drinking vinegar."
        >
          <Link to="/tours" className="btn-white">
            Explore tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}

export default home
