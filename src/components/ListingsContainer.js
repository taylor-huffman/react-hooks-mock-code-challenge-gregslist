import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return <ListingCard key={listing.id} listing={listing} handleDeleteListing={handleDeleteListing} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
