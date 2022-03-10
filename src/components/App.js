import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => setListings(listings))
  }, [])

  function handleDeleteListing(deleteListing) {
    fetch(`http://localhost:6001/listings/${deleteListing.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => setListings(listings => {
      return listings.filter(listing => listing.id !== deleteListing.id)
    }))
  }

  function handleSetFilter(newFilter) {
    setFilter(newFilter)
  }

  const displayListings = listings.filter(listing => listing.description.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="app">
      <Header handleSetFilter={handleSetFilter} />
      <ListingsContainer listings={displayListings} handleDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
