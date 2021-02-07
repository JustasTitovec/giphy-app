import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    setTerm('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit} className="form">
        <div className="field">
          <input
            className="input"
            onChange={(event) => setTerm(event.target.value)}
            value={term}
            type="text"
            placeholder="pages"
            pattern="[a-zA-Z0-9 ]+"
            required
          />
          <div onClick={onSubmit} className="icon">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
