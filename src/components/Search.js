import React from "react";
import { Input } from "@chakra-ui/react";

function Search() {
  return (
    <div className="search">
      <label>Search</label>
      <Input name="search" />
    </div>
  );
}

export default Search;
