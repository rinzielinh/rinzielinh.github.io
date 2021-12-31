import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet, Link } from "react-router-dom";
import { addItem, removeItem, selectTotalItems } from "../slices/cart.slice";
import { Container, Row, Col, Navbar, Nav, Stack, Form, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import { getAll, getById, getBest, getBestById } from "../books";
import Searchbar from "./searchbar"
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/navigation"
import "../App.css"
import "swiper/css";


const About = () => {
  const books = getAll();
  const best = getBest();
  return (
    <main>
      <div className="mobile-banner">
      <div className="banner">             
              <img className="banner-img" src="https://rails-assets-eu.bookshop.org/assets/hero_background_desktop-bdea5ff1b7738dc04c1b1b220544450664cc37c9c090ccb6dd999d3806e9a7de.jpg" alt=""/>
            </div>
      </div>

      <div className="wrap-section-banner">
        <div className="caption">
          <div className="top-caption">Costa Books Awards shortlist</div>
          <div className="section-img">
            <img className="avatar" src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/profile_images/398/original/PGWells_logo.jpg?1603896318" alt="" /><span>  By P&G Wells Booksellers</span>
          </div> 

           
        </div>

        <div className="section-banner">
          <div className="banner-grid">
            <div className="col-grid">
              <img srcSet="https://images-eu.bookshop.org/images/9780198702986.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781838852610.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780711266612.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780571357291.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780241481714.jpg?height=500&v=v4-abf52b2295ef88b4e13fdc4f8d224896" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781910566961.jpg?height=500&v=v4" alt="" />

            </div>
            <div className="col-grid">
              <img srcSet="https://images-eu.bookshop.org/images/9783836577397.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780241534090.jpg?height=500&v=v4-34ec77c3cd8508f9f67badf288e24c94" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780008469870.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780500480502.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9783836577397.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781912520640.jpg?height=500&v=v4" alt="" />

            </div>
            <div className="col-grid">
              <img srcSet="https://images-eu.bookshop.org/images/9781912520640.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780241519332.jpg?height=500&v=v4-40cb954d984a9c44f19d7779a8fc189e" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781783966035.jpg?height=500&v=v4-d6ffa47a77d6b5116808b87ed57ebe10" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780935112962.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780751584332.jpg?height=500&v=v4-8e3e41175233dd15311022d307ed05e9" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780198702986.jpg?height=500&v=v4" alt="" />
            </div>
            <div className="col-grid">
              <img srcSet="https://images-eu.bookshop.org/images/9780751584332.jpg?height=500&v=v4-8e3e41175233dd15311022d307ed05e9" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780702310423.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781408714324.jpg?height=500&v=v4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781838854706.jpg?height=500&v=v4-90385a2812efc737af04383eb783bfd4" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9780241482797.jpg?height=500&v=v4-67fc9ee5088d467ce6f355a9b8f7a38c" alt="" />
              <img srcSet="https://images-eu.bookshop.org/images/9781838852610.jpg?height=500&v=v4" alt="" />
            </div>
           
          </div>
          
        </div>
       
      </div>
      

      <Container className="wrap-news">
      
        <Row>
          <h2>News</h2> 
        </Row>
        <Row className="news">
          <Col xl={3} sm={6} xs={6}>
          <img src="https://dauntbooks.co.uk/wp-content/uploads/2021/04/Tim-Marshall-e1619182334745-280x180.jpeg.webp" alt=""/>
          <div className="news-title">An Online Talk with Tim Marshall<a href="https://dauntbooks.co.uk/tim-marshall-the-power-of-geography/"></a></div>
          </Col >
          <Col xl={3} sm={6} xs={6}>
          <img src="https://dauntbooks.co.uk/wp-content/uploads/2021/03/Indelicacy-280x180.jpg.webp" alt=""/>
          <div className="news-title">Indelicacy shortlisted for the Rathbones Folio Prize<a href="https://dauntbooks.co.uk/indelicacy-shortlisted-for-rathbones-folio-prize/"></a></div>
          </Col>
          <Col xl={3} sm={6} xs={6}>
          <img src="https://dauntbooks.co.uk/wp-content/uploads/2020/07/Alexander-McCall-Smith-desk-1313416-280x180.jpg.webp" alt=""/>
          <div className="news-title">A special treat from Alexander Mccall Smith<a href="https://dauntbooks.co.uk/a-special-treat-from-alexander-mccall-smith/"></a></div>
          </Col>
          <Col xl={3} sm={6} xs={6}>
          <img src="https://dauntbooks.co.uk/wp-content/uploads/2020/07/Real-Life-REPRINT-280x180.jpg.webp" alt=""/>
          <div className="news-title">Real Life shortlisted for Booker Prize<a href="https://dauntbooks.co.uk/shop/books/real-life/"></a></div>
          </Col>
        </Row>
      </Container>

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/promo_banner_slides/desktop_images/108/original/botybanner.jpg?1640155438"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/promo_banner_slides/desktop_images/117/original/DMC_banner_2.jpg?1640157388"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/promo_banner_slides/desktop_images/106/original/Scandinavian_Christmas_Homepage_Banner.jpg?1640010272"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

      <div className="container-swiper">
        <div className="section">
          <div className="section-img">
            <img className="avatar" src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/profile_images/41/original/Ashopfront.jpg?1603813664" alt="" />
          </div>
          <div className="slogan">Books you'll probably want to keep!</div>
        </div>
        <Swiper className="slide-big" modules={[Navigation]} navigation slidesPerView={5.5} spaceBetween={10}>
          {
            best.map((book) => <SwiperSlide key={book.bookId} >

              <div className="product-img">
                <Link to={"bestsellers/book/" + book.bookId}>
                  <img className="swiper-img" src={book.cover} style={{ height: "100%" }} alt={book.title} /></Link>
              </div>

            </SwiperSlide>
            )
          }

        </Swiper>

        <Swiper className="slide-mobile" modules={[Navigation]} navigation slidesPerView={3} spaceBetween={10}>
          {
            best.map((book) => <SwiperSlide key={book.bookId} >

              <div className="product-img">
                <Link to={"bestsellers/book/" + book.bookId}>
                  <img className="swiper-img" src={book.cover} style={{ height: "100%" }} alt={book.title} /></Link>
              </div>

            </SwiperSlide>
            )
          }

      </Swiper>
      </div>

    

      <div className="container-swiper">
        <div className="section">
          <div className="section-img">
            <img className="avatar" src="https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/profile_images/129/original/Shop_logo2Small.jpg?1602691851" alt="" />
          </div>
          <div className="slogan">Memories and Reminiscences</div>
        </div>
        <Swiper className="slide-big" modules={[Navigation]} navigation slidesPerView={5.5} spaceBetween={10}>
          {
            books.map((book) => <SwiperSlide key={book.bookId} >


              <Link to={"book/" + book.bookId}>
                <div className="product-img">
                  <img className="swiper-img" src={book.cover} alt={book.title} />
                </div>
              </Link>


            </SwiperSlide>
            )
          }

        </Swiper>

        <Swiper className="slide-mobile" modules={[Navigation]} navigation slidesPerView={3} spaceBetween={10}>
          {
            books.map((book) => <SwiperSlide key={book.bookId} >


              <Link to={"book/" + book.bookId}>
                <div className="product-img">
                  <img className="swiper-img" src={book.cover} alt={book.title} />
                </div>
              </Link>


            </SwiperSlide>
            )
          }

        </Swiper>
      </div>

     

      
      <div className="signup-section">
        <div >
          <div className="signup-title">Sign up for our Newsletter</div>
          <p className="sub-signup-title">Tell us what books you love.</p>
          <div className="sub-signup-title">Email:  <input type="text" className="form-input"></input></div>
         
            
          
        </div>
        <div className="signup-button"><button className="button">SIGN UP</button></div>

      </div>

    </main>

  )
}

export default About;