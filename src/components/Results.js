import React from "react";
import Moviecard from "./Moviecard";

export default function Results(props) {
    return (
      <div className="Results">
      {props.result.length > 0 ? (
        props.result.map(item => (
          <Moviecard
            key={item.id}
            id={item.id}
            title={item.title}
            poster={item.poster_path}
            genre={item.genre_ids}
            rating={item.vote_average}
            release={item.release_date}>{item.title}</Moviecard>
        ))) : null
      }
      </div>
)}
