import React from 'react';

const GiftItem = (image) => {
  return (
    <li>
      <img src={image.gif.images.downsized.url} />
    </li>
  );
};

export default GiftItem;
