import { useState } from "react";
import { Link } from "react-router-dom";
import "./searchbar.css";
import { Container, Row, Col } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';


const Searchbar = ({placeholder, data}) => {
    const [filteredData,setFilterData] = useState([]);
    
    const [wordEnter,setWordEnter] = useState("");
   

    const handleFilter = (event) => {
       const searchWord = event.target.value;
       setWordEnter(searchWord);
       const newFilter = data.filter((value) => {
           return value.title.toLowerCase().includes(searchWord.toLowerCase());
       });

       if (searchWord === "") {
        setFilterData([]);
       } else {
        setFilterData(newFilter);
       }
    }; 

    const clearInput = () => {
        setFilterData([]);
        setWordEnter("");
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <div className="search-input-area">
                    <input type="text" placeholder={placeholder} value={wordEnter} onChange={handleFilter}/>
                    <div className="searchIcon">
                    {filteredData.length === 0 && wordEnter == "" ? (
                    <SearchIcon /> )  : ( 
                    <CloseIcon id="clearBtn" onClick={clearInput}/> ) }
                </div>
                </div>
                
               
            </div>
            {filteredData.length != 0 &&
            (<div className="dataResult">
                {filteredData.map((value, key) => {
                    return (
                        <div className="wrap-dataItem" key={value.bookId}>
                            <Link className="dataItem" to={"book/" + value.bookId} >
                                <Container>
                                <Row>
                                    <Col ><img className="search-reasult-img" src={value.cover} alt=""/></Col>
                                    <Col xs={8}>
                                        <div className="search-reasult-title" >{value.title}</div>
                                        <div className="search-reasult-author" >By: {value.author}</div>
                                    </Col>
                                    <Col ><div className="search-reasult-price" >${value.price}</div></Col>
                                </Row>
                                </Container>
                            </Link>
                        </div>
                    )
                })}
            </div>)}


        </div>
    )
}

export default Searchbar;