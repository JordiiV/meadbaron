import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AOS from 'aos';
import Content, { HTMLContent } from '../components/Content'

import '../components/main.scss'
import '../components/all.sass'
import 'aos/dist/aos.css';


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div
            className="full-width-image-container margin-top-0 hero-foo"
          >
              <h1
                className="has-text-weight-bold is-size-1"
                style={{
                  color: 'white',
                  margin: '2rem',
                }}
              >
                About me
                </h1>
          </div>
        </div>
        
            <div className="section">
              <div className={"content is-large"}>
                <div id="intro" class="content" style={{ marginTop: "5%", marginBottom: "10%" }}>
                  <p style={{ fontSize: "28px" }}>My name is Jordi and i'm from Barcelona, Spain. If you are interested in my <span className="has-text-weight-bold">personal interests</span> or in my<span className="has-text-weight-bold"> professional career</span> please, continue reading.
                    </p>
                  <p className="" style={{ fontSize: "28px" }}>Otherwise, If you just want my <span className="has-text-weight-bold">curriculum vitae</span> you can download <a style={{ fontSize: "30px" }} className="cvButton" download="curriculum" rel="noopener noreferrer" target="_blank" href="https://app.box.com/s/89mk056ydtu5rq2lc69xfp45ybx2144a">HERE</a></p>
                </div>
              </div>
              
              <PageContent className="content" content={content} />
              
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

export class AboutPage extends React.Component {

  componentDidMount(){
    this.aos = AOS
    this.aos.init()
  }
  render(){
    const isBrowser = typeof document !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;
    const data = this.props.data
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
