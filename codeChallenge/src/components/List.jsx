import React from "react";
import Repo from "./Repo";
import {Row} from "react-bootstrap";
const List = ({ repositories, rating }) => {
  let data = repositories.items;

//   if (rating == "asc") {
//     data.sort((a, b) => a.stargazers_count - b.stargazers_count);
//   } else {
//     data.sort((a, b) => b.stargazers_count - a.stargazers_count);
//   }

//   if (search) {
//     data = data.filter((d) => d.name.toLowerCase().includes(search));
//   }
  return (
           <tbody>
            {data.map((p) => (
                <Repo key={p.id} {...p} />
            ))}
            </tbody>
  );
};

export default List;
