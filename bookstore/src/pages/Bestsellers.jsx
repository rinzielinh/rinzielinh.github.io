import { useState, useEffect } from "react"
import { getBest, getBestById } from "../books";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBest } from "../slices/cart.slice"
// import { Modal } from "./ProductDetail"
import './Home.css'

const Bestsellers = () => {
    const [showModal,setShowModal] = useState(false);
    const dispatch = useDispatch();
    const best = getBest();

    return (
        <Container className="home">
        {/* <Row>
            <Col>
            <h2>All books</h2>
            <button onClick={() => setShowModal(true)}>Add to cart</button>
            {showModal && <Modal hide={() => setShowModal(false)} />}
            </Col>
        </Row> */}
        <Row className="all-books">
            {
                best.map((book) => <Col key={book.bookId} xs={6} sm={6} md={4} lg={3} xl={3} xxl={2}>
                    <div className="booklist-book">
                        <div className="cover-wrapper">
                        <Link className="covers" to={"book/"+ book.bookId }>
                            <div className="book-cover ">  
                            <img src={book.cover} alt={book.title} className="cover"/>
                            </div>
                        </Link>
                        </div>
                        
                        <div className="book-info">
                            <div className="book-title">
                                <Link to={"book/" + book.bookId}>{book.title}</Link>
                            </div>
                            <div className="price-add">
                                <div className="book-author">By: {book.author}</div>
                           
                                <div className="book-price">${book.price}</div>
                            </div>
                            
                        </div>
                        <div className="addToCart" >
                            <button className="button" onClick={() => dispatch(addBest(book.bookId))}>Add to basket</button>
                            
                            </div>
                        
                    </div>
                </Col>)
            }
        </Row>
        
       
    </Container>
          
    )
}

export default Bestsellers;