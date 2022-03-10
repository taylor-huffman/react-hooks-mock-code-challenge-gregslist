import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('All')

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

  function handleSort(sortValue) {
    setSort(sortValue)
  }

  const displayListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(filter.toLowerCase())
  }).sort((a,b) => {
    if (sort === 'All') {
      return true
    } else if (sort === 'A-Z') {
      const locationA = a.location.toUpperCase()
      const locationB = b.location.toUpperCase()
      if (locationA < locationB) {
        return -1;
      }
      if (locationA > locationB) {
        return 1;
      }
      return 0;
    } else {
      const locationA = a.location.toUpperCase()
      const locationB = b.location.toUpperCase()
      if (locationB < locationA) {
        return -1;
      }
      if (locationB > locationA) {
        return 1;
      }
      return 0;
    }
  })

  return (
    <div className="app">
      <Header handleSetFilter={handleSetFilter} />
      <ListingsContainer listings={displayListings} handleDeleteListing={handleDeleteListing} handleSort={handleSort} />
    </div>
  );
}

export default App;
