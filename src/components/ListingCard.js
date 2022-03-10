import React, { useState } from "react";

function ListingCard({ listing, handleDeleteListing }) {

  const {description, image, location} = listing

  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavoriteClick() {
    setIsFavorite(isFavorite => !isFavorite)
  }

  function handleDeleteItem() {
    handleDeleteListing(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteItem} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
