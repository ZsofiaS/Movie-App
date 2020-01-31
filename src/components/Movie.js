import React, { useState, useEffect } from "react";
import StarIcon from '@material-ui/icons/Star';

export default function Movie(props) {
  const [movieData, setMovieData] = useState({});
  const movieID = props.match.params.id;
  const apiKey = process.env.REACT_APP_API_KEY;
  let date = "";
  let language = "";
  if (movieData.release_date) {
    date = movieData.release_date.slice(0,4);
  };
  if (movieData.spoken_languages) {
    language = movieData.spoken_languages[0].name;
  }

  useEffect(() => {
   fetch(
     `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`)
     .then(res => res.json())
     .then(response => {
       setMovieData(response);
     })
     .catch(error => console.log(error));
 }, []);

  return (
    <div className="Movie">
      <div className="Movie-image-container">
        <img src={"http://image.tmdb.org/t/p/w300/" + movieData.poster_path} alt="{movieData.title}" />
      </div>
      <div className="Movie-info-container">
        <h1>{movieData.title}</h1>
        <p>{movieData.overview}</p>
        <p>Language: {language}</p>
        <p>Released: {date}</p>
        <div className="Movie-rating">
        <StarIcon className="Moviecard-star"/>
        <span>{movieData.vote_average}</span>
        </div>
        </div>
    </div>
  );
}
