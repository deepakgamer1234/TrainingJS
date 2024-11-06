// CollectionPreview.js
import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../collection-items/collectionItem";

const CollectionPreview = ({ product }) => {  
  return (
    <div className="collection-preview">
      <div className="preview">
        <div>{product.title}</div>
        {product?.items
          ?.slice(0, 4) // Limit to showing only the first 4 items in the preview
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
