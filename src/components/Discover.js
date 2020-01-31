import React, {useState, useEffect} from "react";
import Results from "./Results";

export default function Discover(props) {

  const [year, setYear] = useState();
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(7);
  const [language, setLanguage] = useState("en");
  const [result, setResult] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  function searchMovies (year) {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&vote_average.gte=${rating}&with_genres=${genre}&with_original_language=${language}`)
      .then(res => res.json())
      .then(response => {
        setResult(response.results);
      })
      .catch(error => console.log(error))
  };

  function changeYear(e) {
    setYear(e.target.value);
  }
  function changeGenre(e) {
    setGenre(e.target.value);
  }
  function changeRating(e) {
    setRating(e.target.value);
    }
  function changeLanguage(e) {
      setLanguage(e.target.value);
      console.log(language);
      }
  useEffect(() => {
      searchMovies(year)
  }, [year, genre, rating, language]);

  return (
    <div className="Discover">
      <h1>{props.title}</h1>
      <div className="Main-content">
      <div className="Filter">
        <form>
        <div>
          <label>Released: </label>
          <input
            style={{ marginLeft : "1rem" }}
            min="1800"
            max="3000"
            type="number"
            placeholder="2019"
            onChange={changeYear}
          />
        </div>
        <div>
          <label>Genres: </label>
          <select onChange={changeGenre} value={genre}>
            <option value="">Select</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Sci fi</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </div>
        <div>
          <label>Rating: </label>
          <select onChange={changeRating} value={rating}>
            <option value="9">9 +</option>
            <option value="8">8 +</option>
            <option value="7">7 +</option>
            <option value="6">6 +</option>
            <option value="5">5 +</option>
            <option value="4">4 +</option>
            <option value="3">3 +</option>
            <option value="2">2 +</option>
            <option value="1">1 +</option>
          </select>
        </div>
        <div>
          <label>Language: </label>
          <select onChange={changeLanguage} value={language}>
            <option value="en">English</option>
            <option value="fra">French</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
            <option value="pt">Portuguese</option>
            <option value="gu">Gujarati</option>
            <option value="hi">Hindi</option>
            <option value="hu">Hungarian</option>
            <option value="id">Indonesian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="pl">Polish</option>
            <option value="ro">Romanian</option>
            <option value="th">Thai</option>
            <option value="vi">Vietnamese</option>
            <option value="zh">Mandarin</option>
            <option value="cn">Cantonese</option>
          </select>
          </div>
        </form>
      </div>
      {console.log(result)}
      {result ? ( <Results
        result={result}
         />) : <p>Please type something.</p> }
      </div>
    </div>
  );
}
