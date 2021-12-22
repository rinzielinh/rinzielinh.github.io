import  { NavLink, Outlet} from "react-router-dom";
import { Container, Col, Row, Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./Text.css";
import { getBest } from "../books";


const Text = () => {
  const books = getBest();
    return (
        <main>
            <div className="banner">             
              <img className="banner-img" src="https://rails-assets-eu.bookshop.org/assets/hero_background_desktop-bdea5ff1b7738dc04c1b1b220544450664cc37c9c090ccb6dd999d3806e9a7de.jpg" alt=""/>
            </div>
           
           
            <Container className="section-books">
              {
                books.map((book) => <Row className="book-row" key={book.bookId}>
                <Col sm={4}>
                  <Link to={"book/"+ book.bookId }>
                     <div className="book-cover">  
                        <img src={book.cover} alt={book.title} className="cover"/>
                     </div>
                  </Link>                
                </Col>
                <Col sm={8}>
                <div className="book-name">{book.title}</div>
                <div className="book-author">{book.author}</div>
                </Col>
              </Row>
              )}
            </Container>
        </main>
       
    )
}

export default Text;