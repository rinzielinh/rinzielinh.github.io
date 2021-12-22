import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectTotalItems, selectTotalPrice, removeItem } from "../slices/cart.slice"
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/navigation"
import { getAll } from "../books";
import { addItem } from "../slices/cart.slice"
import "../pages/PDP.css"
import { NavLink, Link } from "react-router-dom";

// export const Modal = (props) => {
//   const dispatch = useDispatch();

//   return <div className="modal-container">
//       <Row>
//           <Col>
//           <img src={props.cover} alt=""/>
//           </Col>
//           <Col>Book info</Col>
//       </Row>
//       <div className="modal-box">
//         <button onClick={() => dispatch(addItem(selectedItem))}>Add to basket</button>
//       <button onClick={props.hide}>Keep shopping</button>
//       </div>

//   </div>
// }


const ProductDetail = () => {
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const totalItems = selectTotalItems(state);
  const totalPrice = selectTotalPrice(state);
  const books = getAll();
  const selectedItem = books.find((p) => p.bookId == id);





  return (
    <div>
      

      <Container className="mainPDP">
        <Row>
          <Col sm={4}>
            <div className="book-img shadow-book">
              <div className="book-cover-shadow"></div>
              <img src={selectedItem.cover} alt="" />
            </div>
          </Col>
          <Col sm={8}>
            <div className="book-infomation">
              <div className="book-name">{selectedItem.title}</div>
              <div className="author">{selectedItem.author} (Author)</div>
              <div className="price">Price: ${selectedItem.price}</div>
              <div className="add-to-basket">
                <Button  onClick={() => setShowModal(true)}>Add to basket</Button>
                {showModal && (<div className="modal-container">
                  <Row className="modal-box">
                    <Col>
                      <img className="modal-img" src={selectedItem.cover} alt="" />
                    </Col>
                    <Col>
                      <div className="book-info">Book information: </div>
                      <div className="modal-title">Name: {selectedItem.title}</div>
                      <div className="modal-author">Author: {selectedItem.author}</div>
                      <div className="modal-price">Price: ${selectedItem.price}</div>

                    </Col>
                    <div className="modal-button">
                      <button className="modal-button-check" onClick={() => dispatch(addItem(selectedItem.bookId))}>Check out</button></div>
                    <div className="modal-button">
                      <button className="modal-button-keep" onClick={() => setShowModal(false)}>Keep Shopping</button>
                    </div>
                  </Row>

                </div>)}

              </div>

              <div className="available"><i className="bi bi-check-circle-fill"></i>AVAILABLE</div>

              <div className="book-des">Description</div>
              <div className="detail-des">
                <strong>
                  *THE SUNDAY TIMES BESTSELLER*</strong>
                <br></br>
'I can't imagine reading a better book this year'
<br></br>
                <strong> Daily Mirror</strong>
                <br></br>
                {selectedItem.description}
              </div>
            </div>

            <div className="book-des">Product Details</div>
            <div className="book-details">
              <ul>
                <li>Price:</li>
                <li>Publisher:</li>
                <li>Publish Date:</li>
                <li>Language:</li>
                <li>Type:</li>
              </ul>
              <ul>
                <li>Price:</li>
                <li>Publisher:</li>
                <li>Publish Date:</li>
                <li>Language:</li>
                <li>Type:</li>
              </ul>
            </div>
            <div className="book-des">Earn By Promoting Books</div>
          </Col>
        </Row>

      </Container>

      <div className="container-swiper">
        
        <Swiper modules={[Navigation]} navigation slidesPerView={5.5} spaceBetween={10}>
          {
            books.map((book) => <SwiperSlide key={book.bookId} >

              <div className="product-img">
                <Link to={"bestsellers/book/" + book.bookId}>
                  <img className="swiper-img" src={book.cover} style={{ height: "100%" }} alt={book.title} /></Link>
              </div>

            </SwiperSlide>
            )
          }

        </Swiper>
      </div>

    </div>

  )
}

export default ProductDetail;