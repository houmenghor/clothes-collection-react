import React from 'react'
import bg from '../assets/bg1.jpg'
import Products from './Products'
import CartTap from '../components/CartTap'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-dark border-0">
                <img src={bg} className="card-img rounded-0" alt="Background" height={640} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON
                            ARRIVALS</h5>
                        <p className="card-text lead fs-2 fw-bold">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            {/* <Products/> */}
            <CartTap/>
        </div>
    )
}
