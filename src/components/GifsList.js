import React from 'react';
import './GifsList.css';

const GifsList = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => {
        return (
          <div className="gifs-container__image" key={gif.id}>
            <img
              className="img"
              src={gif.images.downsized_medium.url}
              alt={gif.title}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GifsList;
