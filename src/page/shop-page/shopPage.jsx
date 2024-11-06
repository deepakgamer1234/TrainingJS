// ShopPage.js
import React from "react";
import CollectionPreview from "./../../components/collections/CollectionPreview";
import SHOP_DATA from "./shop-data";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { category } = useParams();  
  return (
    <div className="shop-page">
      {SHOP_DATA?.filter(item=> item.title.toLocaleLowerCase() == category.toLocaleLowerCase()).map((item) => (
        <CollectionPreview key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ShopPage;
