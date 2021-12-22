import { useSelector, useDispatch } from "react-redux";
import { selectTotalItems, selectTotalPrice , removeItem, addItem, decreaseItem} from "../slices/cart.slice"
import { Container, Row, Col, Table, Button} from "react-bootstrap";
import "./Cart.css"
import { getById  } from "../books";


const Cart = () => {
    const dispatch = useDispatch();
    const state =  useSelector(state => state);
    const totalItems = selectTotalItems(state);
    const totalPrice = selectTotalPrice(state);
 

    return (
      <main className="shopping-basket">
       <Container>
           <Row>
               <Col><h1>Shopping Basket</h1></Col>
           </Row>
           {JSON.parse(localStorage.getItem("cart")).length > 0 && <Row>
             <Col></Col>
             <Col></Col>
             <Col></Col>
             <Col > 
             <div className="check-out"><button className="button">Check out (Total: ${totalPrice})</button></div>
             </Col>
            
           </Row>}
           

           <div>{JSON.parse(localStorage.getItem("cart")).length === 0 && <div className="book-title" >Shopping basket is empty</div>}</div>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>Item</th>
      <th className="book-title"></th>
      <th className="qty">Qty</th>
      <th>Price</th>
      
    </tr>
  </thead>
  
  <tbody>
    
      {JSON.parse(localStorage.getItem("cart")).map((book) => 
       <tr key={book.bookId} >
       
       <td><div className="cart-cover"><img className="cart-img" src={book.cover} alt={book.title} /><div className="cart-shadow"></div></div></td>
       <td className="book-title">
         <ul>
           <li className="item-title">{book.title}</li>
           <li className="item-author">By: {book.author}</li>
           <li className="item-author">${book.price}</li>
           <li><div className="available"><i className="bi bi-check-circle-fill"></i>AVAILABLE</div></li></ul></td>
       <td className="qty">
        
       <button className="qty-btn" onClick={() => dispatch(decreaseItem(book.bookId))}>-</button>
       <span className="qty-number" >{book.quantity}</span>
       <button className="qty-btn" onClick={() => dispatch(addItem(book.bookId))}>+</button>
       </td> 
       <td className="item-price">${book.price * book.quantity}</td>
       
       <td><button className="delete-btn" onClick={() => dispatch(removeItem(book.bookId))}><i className="bi bi-trash"></i></button></td>
       
     </tr>
      )}
    
    <tr>
      <td colSpan="2">Total:</td>
      
      <td ><div className="total">Total Items: </div>{totalItems}</td>
      <td colSpan="2" className="totalPrice"><div className="total">Total Price:</div>  ${totalPrice}</td>
    
    </tr>
   
  </tbody>
</Table>
       </Container>
       
       </main>
    )
    
}

export default Cart;