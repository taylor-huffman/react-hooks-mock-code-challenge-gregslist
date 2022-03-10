import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing, handleSort }) {

  function handleOnChange(value) {
    handleSort(value)
  }

  return (
    <main>
      <div className="sort-container">
        <label>
          Sort By Location
          <select onChange={(e) => handleOnChange(e.target.value)}>
            <option value="All">Sorting Off</option>
            <option value="A-Z">Sort By Location A-Z</option>
            <option value="Z-A">Sort By Location Z-A</option>
          </select>
        </label>
      </div>
      <ul className="cards">
        {listings.map(listing => {
          return <ListingCard key={listing.id} listing={listing} handleDeleteListing={handleDeleteListing} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
