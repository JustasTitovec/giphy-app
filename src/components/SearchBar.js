import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);

    console.log(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video search</label>
          <input
            className="input"
            onChange={(event) => setTerm(event.target.value)}
            value={term}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
