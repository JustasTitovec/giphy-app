import React, { useState } from 'react';
import GifsList from './components/GifsList';
import SearchBar from './components/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import giphy from './apis/giphy';

const KEY = 'og6TjIlZV6HMhIFiXNXHFxJySKhD0aeu';

function App() {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const onTermSubmit = async (term) => {
    const response = await giphy.get('/gifs/search', {
      params: {
        api_key: KEY,
        limit: 24,
        q: term,
      },
    });

    setGifs(response.data.data);
    setLoading(false);
  };

  // const fetchData = async (term) => {
  //   const response2 = await giphy.get('/gifs/search', {
  //     params: {
  //       api_key: KEY,
  //       limit: 12,
  //       q: term,
  //     },
  //   });

  //   setGifs([...gifs, ...response2.data.data]);
  // };

  // if (isLoading) {
  //   return <div className="app">Loading...</div>;
  // }

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit} />
      <InfiniteScroll dataLength={gifs.length} hasMore={true}>
        <GifsList isLoading={isLoading} gifs={gifs} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
