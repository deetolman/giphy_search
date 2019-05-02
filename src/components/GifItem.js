import React from 'react';
import Styles from '../index.css';

const GiftItem = (image) => {
  return (
    <div className={Styles.Item}>
      <li>
        <img src={image.gif.images.downsized.url} />
      </li>
    </div>
  );
};

export default GiftItem;
