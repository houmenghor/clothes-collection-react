import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/cart";

export default function CartTap() {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Shopping Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          {carts.length === 0 ? (
            <h6>Your cart is empty.</h6>
          ) : (
            <>
              {carts.map((item, index) => <CartItem key={index} data={item} />)}
              <button className="btn btn-danger mt-3 w-100" onClick={() => dispatch(clearCart())}>
                Clear All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
