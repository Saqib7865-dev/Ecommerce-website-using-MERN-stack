import React, { useEffect, useState } from "react";
import ProductsData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver,", "beige", "green"],
  priceRanges: [
    {
      label: "Under $50",
      min: 0,
      max: 50,
    },
    {
      label: "$50 - $100",
      min: 50,
      max: 100,
    },
    {
      label: "$100 - $200",
      min: 100,
      max: 200,
    },
    {
      label: "$200 and above",
      min: 200,
      max: Infinity,
    },
  ],
};
const Shop = () => {
  const [products, setProducts] = useState(ProductsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });
  const applyFilters = () => {
    //   Filter by category
    let filteredProducts = ProductsData;
    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }
    //   Filter by colors
    if (filtersState.color && filtersState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filtersState.color
      );
    }
    //   Filter by price range
    if (filtersState.priceRange) {
      const [minPrice, maxPrice] = filtersState.priceRange
        .split("-")
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filtersState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const clearFilters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };
  return (
    <>
      <section
        className="section__container bg-primary-light"
        onClick={() => console.log("filer: ", products)}
      >
        <h2 className="section__header capitalize">Shop page</h2>
        <p className="section__subheader">
          Discover the Hottest Picks: Elevate your styles with Our Curated
          Collection of Trending Women's Fashion Products.
        </p>
      </section>
      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />
          <div>
            <h3 className="text-xl font-medium !mb-4">
              Products Available: {products.length}
            </h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
