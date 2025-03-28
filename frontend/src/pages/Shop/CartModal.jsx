import React from "react";
import OrderSummary from "./OrderSummary";
import { useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";
const CartModal = ({ products, isCartOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleQuantity = (type, id) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };
  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };
  const handleClearCart = (e) => {
    e.preventDefault();
    dispatch(clearCart());
  };
  return (
    <div
      className={`fixed z-[1000] inset-0 bg-black/80 transition-opacity ${
        isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transition: "transform 300ms cubic-bazier(0.05,0.46,0.45,0.94)",
        }}
      >
        <div className="!p-4 !mt-4">
          <div className="flex justify-between items-center !mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => onClose()}
            >
              <i className="ri-xrp-fill bg-black p-1 text-white cursor-pointer"></i>
            </button>
          </div>
          <div className="cart-items">
            {products.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center md:justify-between !shadow-md md:p-5 !p-2 !mb-4"
                  >
                    <div className="flex !items-center">
                      {" "}
                      <span className="!mr-4 !px-1 bg-primary text-white !rounded-full">
                        0{index + 1}
                      </span>
                      <img
                        src={product.image}
                        alt=""
                        className="!size-12 !object-cover !mr-4"
                      />
                      <div>
                        <h5 className="!text-lg !font-medium">
                          {product.name}
                        </h5>
                        <p className="!text-gray-600 !text-sm">
                          ${Number(product.price.toFixed(2))}
                        </p>
                      </div>
                      <div className="flex md:justify-start !justify-end items-center !mt-2">
                        <button
                          className="size-6 flex items-center justify-center !px-1.5 !rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white !ml-8"
                          onClick={() =>
                            handleQuantity("decrement", product.id)
                          }
                        >
                          -
                        </button>
                        <span className="!px-2 text-center !mx-1">
                          {product.quantity}
                        </span>
                        <button
                          className="size-6 flex items-center justify-center !px-1.5 !rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                          onClick={() =>
                            handleQuantity("increment", product.id)
                          }
                        >
                          +
                        </button>
                        <div className="!ml-5">
                          <button
                            className="text-red-500 hover:text-red-800 !mr-4 cursor-pointer"
                            onClick={(e) => handleRemove(e, product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {products.length > 0 && (
            <OrderSummary handleClearCart={handleClearCart} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
