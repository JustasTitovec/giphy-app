import React, { useState } from 'react';
import GifsList from './components/GiftList/GifsList';
import SearchBar from './components/SearchBar/SearchBar';
import './App.scss';
import giphy from './apis/giphy';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const onTermSubmit = async (term) => {
    const response = await giphy.get('/gifs/search', {
      params: {
        api_key: 'og6TjIlZV6HMhIFiXNXHFxJySKhD0aeu',
        limit: 24,
        q: term,
      },
    });
    console.log(response.data.data);
    setImages(response.data.data);
    setLoading(false);
  };

  return (
    <div className="app">
      <SearchBar onFormSubmit={onTermSubmit} />
      <GifsList isLoading={isLoading} images={images} />
    </div>
  );
}

export default App;
