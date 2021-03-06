import React from 'react'
import { Link} from 'gatsby'
import Typing from 'react-typing-animation';
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import '../components/main.scss'


export const IndexPageTemplate = () => (
    <div>
        <section className={"hero is-fullheight hero-foo is-medium is-dark"}>
          <div className="hero-body" style={{ margin: '5% 0px 0px 0px' }}>
            <div className="container container-mobile" style={{ marginTop: "-8%", padding: "11% 13% 10% 5%" }}>
              <Typing>
                <h1 className="title" style={{ color: 'white', fontWeight: "700", fontSize: "4rem" }}>
                  Hi
              </h1>
                <Typing.Speed ms={150} />
                <h1 className="title" style={{ color: 'white', fontWeight: "700", fontSize: "4rem" }}>
                  I'm the Mead Baron
              </h1>
              <Typing.Speed ms={50} />
                <h1 className="title" style={{ color: 'black', fontWeight: "500", fontSize: "2rem" }}>
                  Front-end developer
              </h1>
              </Typing>
              
            </div>
          </div>
        </section>
        <div className="section">
          <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">
              Last posts
                  </h3>
            <BlogRoll />
            <div className="column is-12 has-text-centered">
              <Link className="btn" to="/blog">
                Read more
              </Link>
            </div>
          </div>
        </div>
    </div>
  )

IndexPageTemplate.propTypes = {
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate
      />
    </Layout>
  )
}

export default IndexPage

