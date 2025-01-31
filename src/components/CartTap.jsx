import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../store/cart";
import ProductList from "./Data"; // Import product data

export default function CartTap() {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total price correctly by fetching product details
  const totalPrice = carts.reduce((acc, item) => {
    const product = ProductList.find((p) => p.id === item.productId);
    return acc + (product ? product.price * item.quantity : 0);
  }, 0);

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

              {/* Display Total Price */}
              <div className="mt-3 d-flex justify-content-between">
                <h5>Total:</h5>
                <h5 className="text-primary fw-bold">${totalPrice.toFixed(2)}</h5>
              </div>

              <button className="btn btn-danger mt-3 w-100" onClick={() => dispatch(clearCart())}>
                Clear All
              </button>
              <button className="btn btn-dark mt-3 w-100">Checkout Now</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
