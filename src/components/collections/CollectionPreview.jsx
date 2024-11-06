// CollectionPreview.js
import React, { useEffect, useState } from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../collection-items/collectionItem";
import { useParams } from "react-router-dom";

const CollectionPreview = ({ product }) => {  
  
  return (
    // <div>{props.subItem.title}</div>
    <div className="collection-preview">
      {/* <h1 className="title">{title.toUpperCase()}</h1> */}
      <div className="preview">
        <div>{product.title}</div>
        {product?.
        //   .slice(0, 4) // Limit to showing only the first 4 items in the preview
        items?.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
