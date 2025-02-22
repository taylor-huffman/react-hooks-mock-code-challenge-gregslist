import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing, handleSort, setViewListings }) {

  function handleOnChange(value) {
    handleSort(value)
  }

  function handleSwitchPage() {
    setViewListings(false)
  }

  return (
    <main>
      <div className="options">
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
        <button onClick={handleSwitchPage}>Add A Listing</button>
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
