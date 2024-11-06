import React from "react";
import "./Home-page.style.css";
import MenuItem from "../../components/MenuItem";
import productCategories from "../Product.categories";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
 
  return (
    <div className="home-page">
      <h1>Welcome to my Homepage</h1>
      <div className="directory-menu">
        {productCategories.sections.map((product) => (
          <MenuItem
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
