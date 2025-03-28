import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../../data/products.json";
import Ratings from "../../../components/Ratings";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(products.find((product) => product.id == id));
  }, []);
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Single Product Page</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">Home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">Shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary cursor-pointer">
            {product.name}
          </span>
        </div>
      </section>
      <section className="section__container !mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold !mb-4">{product.name}</h3>
            <p className="text-xl text-primary !mb-4">
              ${product.price} <s>${product.oldPrice}</s>
            </p>
            <p className="text-gray-400 !mb-4">{product.description}</p>
            <div>
              <p>
                <strong>Category:</strong> {product.category}
                <strong>Color:</strong> {product.color}
                <div className="flex !gap-1 items-center">
                  <strong>Rating: </strong>
                  <Ratings rating={product.rating} />
                </div>
              </p>
            </div>
            <button className="!mt-6 !px-6 !py-3 bg-primary text-white rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <section className="section__container mt-8">Reviews Here</section>
    </>
  );
};

export default SingleProduct;
