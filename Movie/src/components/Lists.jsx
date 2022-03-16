import React from "react";
import Movie from "./Movie";
import { Row } from "react-bootstrap";
const Lists = ({ movies, rating, search }) => {
  let data = movies.results;

  if (rating == "asc") {
    data.sort((a, b) => a.vote_average - b.vote_average);
  } else {
    data.sort((a, b) => b.vote_average - a.vote_average);
  }

  if (search) {
    data = data.filter((d) => d.original_title.toLowerCase().includes(search));
  }

  return (
    <Row>
      {data.map((p) => (
        <Movie key={p.id} {...p} />
      ))}
    </Row>
  );
};

export default Lists;
