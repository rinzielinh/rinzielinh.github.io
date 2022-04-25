import React from "react";
import { useEffect, useState } from 'react';
import { Table} from "react-bootstrap";

import './App.css'
import List from './components/List';
import Form from './components/Form';


import Pagination from "react-js-pagination";



function App() {
  const [rating, setRating] = useState("desc");
  const [submit, setSubmit] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [queryValue, setQueryValue] = useState("")
  useEffect(() => {
    if (queryValue.length > 0) {
      handlePageChange(1);
    }
  }, [queryValue]);
  const [repositories, setRepositories] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    let q = e.target.elements.task.value.trim();
    let query = encodeURIComponent(q);
    console.log('query :>> ', query);
    setQueryValue(query);

  }

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
    const fetchAgain = fetch(`https://api.github.com/search/repositories?q=${queryValue}&sort=stars&order=desc&per_page=25&page=${pageNumber}`);
    fetchAgain
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.status;
      }
    })
    .then((repositories) => {
      setRepositories(repositories);
      setSubmit(true);

      console.log(repositories)
    })
    .catch((error) => {
      console.log(error)
      alert('Something went wrong. Check console.');
    }
    );
  }

    return (
      <div className="App">
        <div className="container">
          <div className="custom-boilerplate">
            <img src="https://image.freepik.com/free-icon/github-logo_318-10832.jpg" alt="abc" className="logo"/>
            <h1>Github Search</h1>
            <p className="lead">
            Search in Github repositories ...
            </p>
           <Form handleSubmit={handleSubmit}/>
          </div>
          
         
          {submit && 
          <main>
              <div className="showing">
              
              <div>
                <div className="select">
                  <select
                    
                    name=""
                    id=""
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="desc">Rating: High to Low</option>
                    <option value="asc">Rating: Low to High</option>
                    
                  </select>
                </div>
              </div>
              
            </div>
            <Table >
            <thead>
              <tr>
              <th className="ten"></th>
              <th>Author Name</th>
              
              <th>Repository Name</th>
              
              <th></th>
              <th></th>
              </tr>
              </thead>
              
                <List
                  rating={rating}
                  repositories={repositories}
                />
               
            </Table>
            <Pagination
              activePage={activePage}
              totalItemsCount={Math.min(repositories.total_count,1000)}
              onChange={handlePageChange}
              itemsCountPerPage={25}
            ></Pagination>
          </main>}

        </div>
        
      </div>
    );
  }

           

export default App;
