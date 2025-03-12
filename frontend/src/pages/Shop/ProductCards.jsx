import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../../components/Ratings";
const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, key) => (
        <div key={key} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 md:max-h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div className="hover:block absolute top-3 right-3">
              <button>
                <i className="ri-shopping-cart-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>
          {/* Product description */}
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              {product.price}{" "}
              {product.oldPrice ? <s>${product.oldPrice}</s> : null}
            </p>
            <Ratings rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
