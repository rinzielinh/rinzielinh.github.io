import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet, Link } from "react-router-dom";
import { addItem, removeItem, selectTotalItems } from "./slices/cart.slice";
import { Container, Row, Col, Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import Searchbar from "../src/pages/searchbar"
import { getAll } from "../src/books";

SwiperCore.use([Navigation]);

const App = () => {
  const dispatch = useDispatch();
  const totalItem = selectTotalItems(useSelector((state) => state));
  const books = getAll();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand >
            <NavLink to="/" className="navbar-brand">
              <img className="logo" src="https://rails-assets-eu.bookshop.org/assets/logo_dark-0d5fc34a5dbaf62c3b832d243e2d3234e3b2b550f8842cd59d34ba1fcb94479a.svg" alt="" />
            </NavLink>
          </Navbar.Brand>
          <div className="big-search">
          <Searchbar placeholder="Enter a Book Name" data={books} />
          </div>

          <div className="wrap-ham">
            
            <div className="wrap-cart-mobile">
              <div className="cart-mobile">
                <NavLink to="cart" className="nav-link">
                  <i className="bi bi-cart3"></i>
                  {totalItem > 0 && (
                    <span className="total-item">{totalItem}</span>
                  )}
                </NavLink>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="small-search">
                <Searchbar placeholder="Enter a Book Name" data={books} />
              </div>
              <NavLink to="/" className="nav-link" >HOME</NavLink>
              <NavLink to="home" className="nav-link" >COLLECTIONS</NavLink>
              <NavLink className="nav-link" to="bestsellers">BESTSELLERS</NavLink>
              <NavLink to="cart" className="nav-link cart">
                <i className="bi bi-cart3"></i>
                {totalItem > 0 && (
                  <span className="total-item">{totalItem}</span>
                )}
              </NavLink>
            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>


      <div>
        <Outlet />
      </div>



      <footer className="footer">
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={3}>
              <ul className="footer-group center">
                <img className="footer-logo" src="https://rails-assets-eu.bookshop.org/assets/logo_light-5021bfa2b02119f3ca9fc756c6837d4961c19a8978122c61aa355247f34c7ff5.svg" alt="" />
              </ul>
            </Col>
            <Col className="footer-mobile" xs={12} sm={6} lg={3}>
              <ul className="footer-group">CONTACT</ul>
              <ul>
                <li className="footer-bullet">+1123456789</li>
                <li className="footer-bullet">BOOKSHOP.ORG</li>
                <li className="footer-bullet">82 OXFORD CIRCUS, LONDON</li>
              </ul>
            </Col>

            <Col className="footer-mobile"  xs={12} sm={6} lg={3}>
              <ul className="footer-group">OPEN HOURS</ul>
              <ul>
                <li className="footer-bullet">WEEKDAYS: 10AM – 9PM</li>
                <li className="footer-bullet">SATURDAY: 10AM – 6PM</li>
                <li className="footer-bullet">SUNDAY CLOSED</li>
              </ul>
            </Col>

            <Col className="footer-mobile"  xs={12} sm={12} lg={3}>
              <ul className="footer-group">
                <div className="follow-us">Follow us</div>
              </ul>
              <ul>
                <div className="wrap-icons">

                  <div className="social-icons"><i className="bi bi-facebook"></i></div>
                  <div className="social-icons"><i className="bi bi-whatsapp"></i></div>
                  <div className="social-icons"><i className="bi bi-instagram"></i></div>
                </div>

              </ul>
            </Col>
          </Row>

        </Container>
        <div className="footer-bottom-wrap">
          <div className="footer-bottom-title" >© 2021 Rinzie Code Interactive, All Rights Reserved</div>
        </div>

      </footer>
    </div>
  )
}

export default App
