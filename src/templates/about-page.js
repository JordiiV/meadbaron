import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import '../components/main.scss'
import '../components/all.sass'


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
               <div className={"content is-large"}>
                  <div id="intro" class="content">
                    <p style={{ fontSize: "28px" }}>My name is Jordi and i'm from Barcelona, Spain. If you are interested in my <span className="has-text-weight-bold">personal interests</span> continue reading.
                    <br />
                      If you are interested in my <span className="has-text-weight-bold">bussines mode</span>, click this switch button.
                    </p>
                    <p className="" style={{ fontSize: "28px" }}>Otherwise, If you just want my curriculum vitae, you can download <a style={{ fontSize: "30px" }} className="cvButton" download="curriculum" rel="noopener noreferrer" target="_blank" href="https://app.box.com/s/89mk056ydtu5rq2lc69xfp45ybx2144a">HERE</a></p>
                  </div>
                </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
