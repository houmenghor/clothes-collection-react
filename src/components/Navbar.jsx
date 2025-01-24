import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function Navbar() {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    useEffect(() => {
        const total = carts.reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(total);
    }, [carts]);
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm sticky-top">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4 text-decoration-none" to="/">
                        CLOTHES COLLECTION 
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                               <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                               <NavLink to="/register" className="btn btn-outline-dark ms-2">
                               <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                               <NavLink data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" 
                               aria-controls="offcanvasExample" className="btn btn-outline-dark ms-2" 
                               >
                                <i className="fa fa-shopping-cart me-1"></i> Cart ({totalQuantity})
                               </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}
