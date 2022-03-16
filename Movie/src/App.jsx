import React from "react";
import Lists from "./components/Lists";
import "./App.css";
import "./style/style.css";
import search from "./img/Outline/Interface/Search.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    search: "",
    rating: "asc",
    movies: [],
    loading: true,
  };

  componentDidMount = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=58fd7a0c10a41b3c8fc08f2b4371fd5f&language=en-US&page=1"
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return res.statusText;
        }
      })
      .then((movies) => {
        this.setState({ movies, loading: false });
      })
      .catch((error) => console.log("Error!"));
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <div className="boxLoading"></div>
        </div>
      );
    }
    return (
      <div className="App">
        <div className="container">
          <main>
            <header>
              <nav id="big-menu">
                <ul id="top-menu">
                  <li className="wrap-logo-search">
                    <a className="logo" href="/">
                      <img
                        src="https://w10.hdonline.eu/wp-content/themes/assets/images/logo.png"
                        alt=""
                      />
                    </a>

                    <div id="search">
                      <input
                        className="search-input"
                        placeholder=" Search..."
                        type="text"
                        onChange={(e) =>
                          this.setState({ search: e.target.value })
                        }
                      />
                      <div className="search-submit">
                        <SearchIcon />
                      </div>
                    </div>
                  </li>

                  <li>
                    <div id="login-status">
                      <div id="header-login">
                        <div className="btn-login">
                          <AccountBoxIcon id="user"></AccountBoxIcon>
                          Member login
                        </div>
                      </div>
                      <div id="header-login-small">
                        <div className="btn-login">
                          <AccountBoxIcon id="user"></AccountBoxIcon>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="menu">
                  <li>
                    <div className="nav-link-bar">HOME</div>
                  </li>

                  <li>
                    <div className="nav-link-bar">GENRE</div>
                  </li>

                  <li>
                    <div className="nav-link-bar">SERIES</div>
                  </li>

                  <li>
                    <div className="nav-link-bar">TVSHOWS</div>
                  </li>
                  <li>
                    <div className="nav-link-bar">TOP IMDb</div>
                  </li>
                </ul>
              </nav>

              <div id="mobile-menu">
                <nav role="navigation">
                  <div id="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                      <a href="#">
                        <li>HOME</li>
                      </a>
                      <a href="#">
                        <li>MOVIES</li>
                      </a>
                      <a href="#">
                        <li>SERIES</li>
                      </a>
                      <a href="#">
                        <li>TVSHOWS</li>
                      </a>
                      <a href="#" target="_blank">
                        <li>TRAILERS</li>
                      </a>
                    </ul>
                  </div>
                </nav>
                <div id="search-mobile">
                  <input
                    className="search-input"
                    placeholder=" Search..."
                    type="text"
                    onChange={(e) => this.setState({ search: e.target.value })}
                  />
                </div>
              </div>
            </header>

            <div className="now-playing">
              <div className="gh-title">Now playing movies</div>

              <div>
                <div className="select">
                  <select
                    value={this.state.rating.rate}
                    name=""
                    id=""
                    onChange={(e) => this.setState({ rating: e.target.value })}
                  >
                    <option value="asc">Rating: Low to High</option>
                    <option value="desc">Rating: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            <Lists
              movies={this.state.movies}
              search={this.state.search}
              category={this.state.category}
              popularity={this.state.popularity}
              rating={this.state.rating}
            />
            <Footer />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
