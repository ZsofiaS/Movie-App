import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div
      className={props.isShown ? "Sidebar-active" : "Sidebar"}
      isShown={props.isShown}>
    <div>
      <Link className="Link" to="/search">
        Search
      </Link>
    </div>
      <div>
        <Link className="Link" to="/discover">
          Discover
        </Link>
      </div>
      <div>
        <Link className="Link" to="/popular">
          Popular
        </Link>
      </div>
      <div>
        <Link className="Link" to="/trending">
          Trending
        </Link>
      </div>
    </div>
  );
}
