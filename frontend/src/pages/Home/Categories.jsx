import React from "react";
import { Link } from "react-router-dom";
import categoryImage1 from "../../assets/category-1.jpg";
import categoryImage2 from "../../assets/category-2.jpg";
import categoryImage3 from "../../assets/category-3.jpg";
import categoryImage4 from "../../assets/category-4.jpg";
const Categories = () => {
  const categories = [
    {
      name: "Accessories",
      path: "accessories",
      image: categoryImage1,
    },
    {
      name: "Dress Collection",
      path: "dress",
      image: categoryImage2,
    },
    {
      name: "Jewellery",
      path: "jewellery",
      image: categoryImage3,
    },
    {
      name: "Cosmetics",
      path: "cosmetics",
      image: categoryImage4,
    },
  ];
  return (
    <div className="product__grid">
      {categories.map((category) => {
        return (
          <Link to={`/categories/${category.path}`} className="categories__card">
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
