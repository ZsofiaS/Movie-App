import React from "react";
import StarIcon from '@material-ui/icons/Star';
import { Link } from "react-router-dom";

export default function Moviecard(props) {
  let date = "";
  if (props.release) {
    date = props.release.slice(0,4);
  }

  return (
    <div>
    <Link className="Moviecard" to={`/movie/${props.id}`}>
      <div className="image-container">
        <img src={"http://image.tmdb.org/t/p/w154/" + props.poster} alt={props.title} />
      </div>
      <div className="info-container">
        <h3>{props.title.length < 30 ? props.title : props.title.substring(0, 30) + "..."}</h3>
        <p>{date}</p>
        <p>{props.genre_ids}</p>
        <StarIcon className="Moviecard-star"/><span className="Moviecard-rating">{props.rating}</span>
      </div>
    </Link>
    </div>
  );
};
