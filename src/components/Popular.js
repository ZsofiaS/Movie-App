import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

export default function Popular(props) {
  const [moviesList, setMoviesList] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
    const [page, setPage] = useState(1);

  function loadMovies () {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
      .then(res => res.json())
      .then(response => {
        setMoviesList(response.results);
      })
      .catch(error => console.log(error));
  }
 useEffect(loadMovies, []);
 function loadHandle(e) {
   console.log(page);
   let one = e.target.value;
   console.log(one);
   if ((page + Number(one)) > 0 && (page + Number(one)) < 1000) {
     fetch(
         `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page + Number(one) }`)
         .then(res => res.json())
         .then(response => {
           setMoviesList(response.results);
           })
         .catch(error => console.log(error));
     setPage(prevValue => (prevValue + Number(one)));
     console.log(moviesList);
   } else {
     return;
   }}

  return (
    <div className="Popular">
        <h1>Popular</h1>
        <div className="Popular-content">
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
      <div className="LoadButton-container">
      <button className="LoadButton" onClick={loadHandle} value="-1">Previous</button>
      <button className="LoadButton" onClick={loadHandle} value="1">Next</button>
      </div>
      </div>
    </div>
  );
}
