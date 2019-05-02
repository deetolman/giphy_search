import React from 'react';
import GifItem from './GifItem';
import Styles from '../index.css';

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />;
  });
  return (
    <>
    <div className={Styles.List}>
      <ul>{gifItems}</ul>
    </div>
    </>
  );
};

export default GifList;
