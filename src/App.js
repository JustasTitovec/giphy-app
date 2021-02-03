import React, { useState, useEffect } from 'react';
import GifsList from './components/GifsList';
import SearchBar from './components/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import giphy from './apis/giphy';

const KEY = 'og6TjIlZV6HMhIFiXNXHFxJySKhD0aeu';

function App() {
  const [gifs, setGifs] = useState([]);
  const [term, setTerm] = useState('');

  let count = 0;

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

  const fetchData = async (term) => {
    const response = await giphy.get('/gifs/search', {
      params: {
        api_key: KEY,
        limit: 24,
        q: term,
        offset: 13,
      },
    });

    setGifs([...gifs, ...response.data.data]);
    console.log(gifs.length);
  };

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit} />

      <InfiniteScroll
        dataLength={gifs.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <GifsList gifs={gifs} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
