import React, { useState } from "react";

export default function Apii({ onSearch }) {
  const [searchInput, setSearchInput] = useState('')


  const handleSearch = (e) => {
    e.preventDefault();

    onSearch({
            variables: {
        login: searchInput,
      },

    })
    setSearchInput('')
  };

  return (
    <div className="container ml-auto search d-flex">
      <form onSubmit={handleSearch} class="form-inline">
        <div class="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Github Username"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <button type="submit" className="btn bg-dark btn-outline-secondary">
            Search
          </button>
        </div>
      </form>
    </div>
  );

  
}
