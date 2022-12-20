import React from "react";
import Movie from "./Movie";

import { data } from "../test";
import { Get } from "react-axios";

function Movies() {
  return (
    <div className="movies">
      <h4>Category Name</h4>
      <div>
        <div>
          <Get
            url="https://www.omdbapi.com"
            params={{ apikey: "960b03a5", t: "Harry+Potter" }}
          >
            {(error, response, isLoading, makeRequest, axios) => {
              if (error) {
                return (
                  <div>
                    Something bad happened: {error.message}{" "}
                    <button
                      onClick={() => makeRequest({ params: { reload: true } })}
                    >
                      Retry
                    </button>
                  </div>
                );
              } else if (isLoading) {
                return <div>Loading...</div>;
              } else if (response !== null) {
                return (
                  <div>
                    {data.map((movie, i) => (
                      <Movie key={i} movie={movie} />
                    ))}
                  </div>
                );
              }
              return <div>Default message before request is made.</div>;
            }}
          </Get>
        </div>
      </div>
    </div>
  );
}

export default Movies;
