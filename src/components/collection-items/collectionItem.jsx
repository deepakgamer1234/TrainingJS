// CollectionItem.js
import React from 'react';
import './collectionItem.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  console.log("IMG CHILD ITEMS--------", item)
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <button className="custom-button">Add to cart</button>
    </div>
  );
};

export default CollectionItem;
