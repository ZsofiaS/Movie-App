import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import Results from "./Results";

export default function Main(props) {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;

  function searchMovies (searchTerm) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(response => {
        setResult(response.results);
      })
      .catch(error => console.log(error));
  };
  function handleChange(e) {
    const newValue = e.target.value;
    setSearchTerm(newValue);
  }
  function handleClick(e) {
    e.preventDefault();
    searchMovies(searchTerm);
    setSearchTerm("");
  }

  return (
    <div className="Main">
      <h1>{props.title}</h1>
      <div className="Main-content">
      <form>
        <input value={searchTerm} type="text" placeholder="Movie title..." onChange={handleChange}/>
        <button onClick={handleClick}>
          <SearchIcon className="Main-button"/>
        </button>
      </form>
      {console.log(result)}
      {result ? ( <Results
        result={result}
         />) : null }
      </div>
    </div>
  );
}
