import React, { useState } from "react";

function Search({ handleSetFilter }) {

  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    handleSetFilter(e.target.search.value)
    setSearch('')
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
