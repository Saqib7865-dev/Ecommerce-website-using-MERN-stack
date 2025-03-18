import React from "react";

const CartModal = ({ products, isCartOpen, onClose }) => {
  return (
    <div
      className={`fixed z-[1000] inset-0 bg-black transition-opacity  text-white ${
        isCartOpen ? "opacity-50" : "opacity-0 pointer-events-none"
      }`}
      style={{ transition: "opacity 300ms" }}
    >
      Cart Modal
    </div>
  );
};

export default CartModal;
