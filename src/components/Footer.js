import React from 'react'
import github from '../img/github-icon.svg'
import linkedin from '../img/social/linkedin.svg'
import twitter from '../img/social/twitter.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer" style={{ padding: '3rem 1.5rem 3rem', marginTop: '3%', backgroundColor: "#f1f1f1" }}>
      <div className="content has-text-centered container-footer">
        <p style={{ color: 'black' }}>
          Here you can find me!
    </p>
        <div className="columns is-mobile is-centered">
          <div className="column has-text-centered is-one-fifth-desktop">
            <a
              className=""
              href="https://github.com/JordiiV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
          <div className="column has-text-centered is-one-fifth-desktop">

            <a
              className=""
              href="https://www.linkedin.com/in/jvilardell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedin} alt="Linkedin" />
              </span>
            </a>
          </div>
          <div className="column has-text-centered  is-one-fifth-desktop">

            <a
              className=""
              href="https://twitter.com/Jordi_Vilardell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={twitter} alt="Twitter" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer
