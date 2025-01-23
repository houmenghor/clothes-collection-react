import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartTap() {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div>
      {/* Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Your Cart</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          {carts.length === 0 ? (
            <h6>Your cart is empty.</h6>
          ) : (
            carts.map((item, index) => <CartItem key={index} data={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
