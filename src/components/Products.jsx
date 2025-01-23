import React, { useState, useEffect } from 'react';
import ProductList from './Data';
import CartTap from './CartTap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
import { Link } from 'react-router-dom';

const Products = () => {
  const [filter, setFilter] = useState([]); // Filtered products
  const [loading, setLoading] = useState(true); // Loading state
  
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setFilter(ProductList); // Load all products
      setLoading(false); // Stop loading
    }, 500);
  }, []);

  // Filter products by category
  const filterProduct = (category) => {
    if (category === "all") {
      setFilter(ProductList); // Show all products
    } else {
      const updatedList = ProductList.filter(
        (product) => product.category === category
      );
      setFilter(updatedList);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
      })
    );
  };
  console.log(carts)
  
  const Loading = () => (
    <div className="text-center my-5">
      <h2>Loading...</h2>
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="buttons d-flex justify-content-center mb-4">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("all")}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothes
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothes
        </button>
      </div>

      <div className="row">
        {filter.map((product) => (
          <div
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4"
            key={product.id}
          >
            <div className="card h-100 text-center p-4">
              <Link to={`/product/${product.slug}`}>
              <img
                src={product.img}
                height="260px"
                className="card-img-top"
                alt={product.name}
              />
              </Link>
              <div className="card-body">
                <h5 className="card-title m-0">
                  {product.name.substring(0, 11)}...
                </h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div>
      <div className="container my-4 py-1">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr className="mb-0" />
          </div>
        </div>
        <div className="row justify-content-start">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <CartTap />
    </div>
  );
};

export default Products;
