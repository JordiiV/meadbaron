import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import '../../components/main.scss'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0 hero-foo"
              >
                <h1
                  className="has-text-weight-bold is-size-1 marginTop2"
                  style={{
                    color: 'white',
                    margin: '2rem',
                  }}
                >
                  Blog
                </h1>
              </div>
            </div>
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
