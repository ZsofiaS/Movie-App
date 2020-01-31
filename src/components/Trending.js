import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

export default function Trending(props) {
  const [moviesList, setMoviesList] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
   fetch(
     `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
     .then(res => res.json())
     .then(response => {
       setMoviesList(response.results);
     })
     .catch(error => console.log(error));
 }, []);

  return (
  <div className="Trending">
      <h1>Trending</h1>
      <div className="Trending-content">
      {moviesList.map(item => (
      <Moviecard
        key={item.id}
        id={item.id}
        title={item.title}
        poster={item.poster_path}
        genre={item.genre_ids}
        rating={item.vote_average}
        release={item.release_date}></Moviecard>
    ))}
    </div>
  </div>
  );
}
