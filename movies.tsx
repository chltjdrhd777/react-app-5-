import React from "react";
import "./Movie.css";
import { generateKeyPairSync } from "crypto";

interface Movietype {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: string[];
}

function Movie(props: Movietype) {
  return (
    <div className="movie">
      <img
        src={props.medium_cover_image}
        alt={props.title}
        title={props.title}
      />

      <div className="movie_data">
        <h3 className="movie_title">{props.title}</h3>
        <h3 className="movie_year">{props.year}</h3>
        <h3 className="movie_summary">{props.summary}</h3>
        <ul className="genres">
          {props.genres.map((
            everygenres,
            index // remember : .map() provides the every elements with the basic index inherent
          ) => (
            <li key={index} className="genres_genre">
              {everygenres}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
