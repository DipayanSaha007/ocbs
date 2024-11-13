// src/components/SearchMovies.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchMovies() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', searchCriteria);

    // Simulate a search and redirect to the showtime selection page
    if (searchCriteria) {
      navigate('/select-showtime'); // Redirect to the select showtime page
    } else {
      alert('Please enter search criteria.'); // Handle empty search
    }
  };

  return (
    <div className="search-movies-container">
      <h2>Search Movies</h2>
      <input
        type="text"
        placeholder="Enter movie title, genre, or release date"
        onChange={(e) => setSearchCriteria(e.target.value)}
      />
      <button onClick={handleSearch} className="btn">Search</button>
      {/* Display search results here */}
    </div>
  );
}

export default SearchMovies;