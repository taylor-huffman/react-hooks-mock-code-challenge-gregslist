import React, { useState } from "react";

function AddListing({ setViewListings, handleAddItem }) {

    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: '',
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleAddItem(formData)
        setViewListings(true)
    }

    function handleReturnToListings() {
        setViewListings(true)
    }

    return (
        <main>
            <div className="options">
                <h2>Add A Listing</h2>
                <button onClick={handleReturnToListings}>Return To Listings</button>
            </div>
            <form onSubmit={handleSubmit} className="add-listing-form">
                <input onChange={handleChange} type='text' placeholder='Description' name="description"></input>
                <input onChange={handleChange} type='text' placeholder="Image URL" name="image"></input>
                <input onChange={handleChange} type='text' placeholder="Location" name="location"></input>
                <input type='submit'></input>
            </form>
        </main>
    )
}

export default AddListing