import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import jQuery from 'jquery'
import './main.scss'

export default class Navbar extends React.Component {

  state = {
    isHide: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideNavbar);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideNavbar);
  }

  crossBurguer = () => {
    jQuery('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  }

  hideNavbar = () => {
    let { isHide } = this.state
    window.scrollY > this.prev ?
      !isHide && this.setState({ isHide: true })
      :
      isHide && this.setState({ isHide: false })

    this.prev = window.scrollY;
  }


  render() {
    let classHide = this.state.isHide ? "hide" : ""
    return (
      <nav className={"navbar is-fixed-top " + classHide} style={{transitionDuration: "1s", marginBottom: '5%', backgroundColor: "#f1f1f1", height: "6%" }}>


        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Rhino" style={{ width: '35px', height: "100%", maxHeight: "2.75rem" }} />
              </figure>
            </Link>
            <div class="navbar-burger burger" onClick={this.crossBurguer} data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu navbar-end" id="navbarMenuHeroA" style={{ backgroundColor: "#f1f1f1" }}>
            <Link className='navbar-item' activeClassName="active" exact to="/about">
              About
            </Link>
            <Link className='navbar-item' activeClassName="active" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </nav>


    )
  }
}
