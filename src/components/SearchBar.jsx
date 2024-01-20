import React from 'react';
import '../style.css';
const SearchBar = ({ onSearch, className }) => {
  return (
    <div className={`input-group ${className}`}>
      <input
        type="text"
        className="form-control"
        placeholder="Ara..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
