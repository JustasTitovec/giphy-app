import React, { useState } from 'react';
import GifsList from './components/GifsList';
import SearchBar from './components/SearchBar';

import './App.css';
import giphy from './apis/giphy';

const KEY = 'og6TjIlZV6HMhIFiXNXHFxJySKhD0aeu';

function App() {
  const [gifs, setGifs] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await giphy.get('/gifs/search', {
      params: {
        api_key: KEY,
        limit: 12,
        q: term,
      },
    });

    setGifs(response.data.data);
  };

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit} />
      <GifsList gifs={gifs} />
    </div>
  );
}

export default App;
