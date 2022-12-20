import React from "react";

function Movie({ movie }) {
  return (
    <div className="movie">
      <h5>{movie?.Title}</h5>
    </div>
  );
}

export default Movie;
