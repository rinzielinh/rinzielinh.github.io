import { useState, useEffect } from "react"
import { getAll } from "../books";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cart.slice"
import './Home.css'



const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    
    const books = getAll();

    const handleAdd = (data) => {
        dispatch(addItem(data))
        setShowModal(true);
    }

    return (
            <Container className="home">
                <Row>
                    <Col>
                    {showModal && (<div className="modal-container">
                  <Row className="modal-box">
                  <div className="center noti">Successfully added to your basket</div>
                   
                    <div className="modal-button">
                      <button className="modal-button-keep" onClick={() => setShowModal(false)}>Keep Shopping</button>
                    </div>
                  </Row>

                </div>) }
                    </Col>
                </Row>
                <Row className="all-books">
                    {
                        books.map((book) => <Col key={book.bookId} xs={6} sm={6} md={4} lg={3} xl={3} xxl={2}>
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
                                    <button className="button" onClick={() => handleAdd(book.bookId) }> <i className="bi bi-cart3"></i>  Add to basket</button>
                                    
                                    </div>
                                
                            </div>
                        </Col>)
                    }
                </Row>
                
               
            </Container>
        
       
    )
}

export default Home;
