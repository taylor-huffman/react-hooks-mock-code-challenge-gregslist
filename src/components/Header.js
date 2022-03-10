import React from "react";
import Search from "./Search";

function Header({ handleSetFilter }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSetFilter={handleSetFilter} />
    </header>
  );
}

export default Header;
