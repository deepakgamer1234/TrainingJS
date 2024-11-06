import React from "react";
import "./Menuitem.scss";
import { useNavigate } from "react-router-dom";
const MenuItem = (props) => {
  console.log(props);
  const { title, imageUrl } = props.product;
  const navigation = useNavigate();

  const handleNavigation = (product) => {
    console.log("onClick", product);
    navigation(`/shop/${product.title}`);
  };
  return (
    <div className="menu-item" onClick={() => handleNavigation(props.product)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <div className="subtitle">Shop now</div>
      </div>
    </div>
  );
};

export default MenuItem;
