import React, { useEffect, useState } from "react";
import ProductList from "./Data";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/cart";

export default function CartItem({ data }) {
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.productId) {
      const product = ProductList.find((item) => item.id === data.productId);
      setDetail(product || null);
    }
  }, [data]);

  if (!detail) return null;

  const handleMinusQuantity = () => {
    if (data.quantity > 1) {
      dispatch(
        changeQuantity({
          productId: data.productId,
          quantity: data.quantity - 1,
        })
      );
    } else {
      dispatch(
        changeQuantity({
          productId: data.productId,
          quantity: 0, // Remove item
        })
      );
    }
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: data.productId,
        quantity: data.quantity + 1,
      })
    );
  };

  return (
    <div className="card mb-2 p-2 shadow-sm">
      <div className="row g-2 align-items-center">
        {/* Product Image */}
        <div className="col-2 text-center">
          <img
            src={detail.img}
            alt={detail.name}
            className="img-fluid rounded"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </div>

        {/* Product Name (Trimmed) */}
        <div className="col-4">
          <h6 className="fw-bold text-truncate" style={{ maxWidth: "120px" }}>
            {detail.name.substring(0,11)}
          </h6>
        </div>

        {/* Price */}
        <div className="col-3 text-end">
          <p className="fs-6 fw-semibold text-primary mb-0">${(detail.price * data.quantity).toFixed(1)}</p>
        </div>

        {/* Quantity Controls */}
        <div className="col-3 d-flex justify-content-center align-items-center">
          <button className="btn rounded-5 btn-outline-danger fw-bold d-flex justify-content-center align-items-center"style={{width:'25px',height:'25px'}} onClick={handleMinusQuantity}>
            <i className="bi bi-dash">-</i>
          </button>
          <span className="fs-6 mx-1">{data.quantity}</span>
          <button className="btn rounded-5 btn-outline-success fw-bold d-flex justify-content-center align-items-center"style={{width:'25px',height:'25px'}} onClick={handlePlusQuantity}>
            <i className="bi bi-plus">+</i>
          </button>
        </div>
      </div>
    </div>
  );
}