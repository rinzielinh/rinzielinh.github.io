import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import thumbUp from "../img/ThumbsUp.svg";
import thumbDown from "../img/ThumbsDown.svg";
import heart from "../img/Heart.svg";
import play from "../img/Play.svg";
import pause from "../img/Pause.svg";
import StarRating from "./Stars";

import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Movie = ({
  poster_path,
  original_title,
  title,
  vote_average,
  vote_count,
  backdrop_path,
  overview,
  release_date,
  popularity,
  id,
}) => {
  const [data, setData] = useState({ genres: [] });
  const [showModal, setShowModal] = useState(false);
  const handleClick = (id) => {
    setShowModal(true);
    fetchUsers(id);
  };
  const fetchUsers = (id) => {
    // Where we're fetching data from
    return (
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          id +
          "?api_key=58fd7a0c10a41b3c8fc08f2b4371fd5f&language=en-US"
      )
        // We get the API response and receive data in JSON format
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.error(error))
    );
  };
  return (
    <Col xs={12} sm={6} lg={3} xl={3}>
      <div className="movies">
        <div className="movies-thumbnail">
          <div className="shadow-movie movie-img">
            <img
              className="movie-pic"
              src={"https://image.tmdb.org/t/p/w1280/" + poster_path}
              alt={poster_path}
              onClick={() => handleClick(id)}
            ></img>
          </div>

          {/* <img className="product-pic" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + poster_path} alt={poster_path}></img> */}
        </div>
        <div className="movie-detail">
          <h4 className="movie-title">{title}</h4>
          {/* <p className="product-price">Popularity: {popularity}</p> */}

          <span>Vote average: {vote_average}</span>
          {/* <p className="rating">Vote count: {id + 1} </p> */}
          <StarRating rate={vote_average} key={Math.random()}></StarRating>
        </div>
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="modal-box">
            <div className="modal-img">
              <img
                src={"https://image.tmdb.org/t/p/w1280/" + backdrop_path}
                alt=""
              />
            </div>

            <div className="movie-info">
              <h1 className="title">{title}</h1>

              {/* <img className="icon" src={play} alt="" />
              <img className="icon" src={pause} alt="" /> */}

              <Tooltip title="Like">
                <img className="icon" src={thumbUp} alt="" />
              </Tooltip>

              <Tooltip title="Dislike">
                <img className="icon" src={thumbDown} alt="" />
              </Tooltip>
              <Tooltip title="Wishlist">
                <img className="icon" src={heart} alt="" />
              </Tooltip>

              <h3 className="overview">Overview</h3>
              <div className="overview">{overview}</div>
              <div className="release-date">
                <ul className="wrap-release-date">
                  <li className="sub-release-date">Original title:</li>
                  <li>{original_title}</li>
                </ul>
                <ul className="wrap-release-date">
                  <li className="sub-release-date">Release date:</li>
                  <li>{release_date}</li>
                </ul>
              </div>
              {/* <div className="overview"> </div> */}

              <div className="wrap-service-left">
                <p className="service-des">
                  Genres:
                  {data.genres.map((item) => {
                    return (
                      <span className="genres" key={item.id}>
                        {item.name}
                      </span>
                    );
                  })}
                </p>
                <p className="service-des">
                  Runtime: {Math.floor(data.runtime / 60)} h &nbsp;
                  {data.runtime % 60} m
                </p>
                <p className="service-des">Vote average: {vote_average}</p>
                <p className="service-des">Vote count: {vote_count}</p>
                {data.budget == 0 ? (
                  <p></p>
                ) : (
                  <p className="service-des">Budget: ${data.budget}</p>
                )}
              </div>
            </div>

            <div className="modal-button">
              <div
                className="close-button"
                onClick={(e) => {
                  setShowModal(false);
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};

export default Movie;
