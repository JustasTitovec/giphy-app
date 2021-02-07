import React, { useState } from 'react';
import GifsList from './components/GiftList/GifsList';
import SearchBar from './components/SearchBar/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.scss';
import giphy from './apis/giphy';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const onTermSubmit = async (term) => {
    const response = await giphy.get('/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API,
        limit: 12,
        q: term,
      },
    });

    setImages([...response.data.data]);
    setLoading(false);
  };

  const fetchData = async (term) => {
    const response = await giphy.get('/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_API,
        limit: 12,
        q: term,
      },
    });

    setImages(images.concat(response.data.data));
  };

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit} />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchData}
        hasMore={true}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <GifsList isLoading={isLoading} images={images} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
