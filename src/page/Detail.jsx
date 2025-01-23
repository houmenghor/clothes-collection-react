import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../components/Data';
import CartTap from '../components/CartTap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';
export default function Detail() {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const carts = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    console.log(carts)


    useEffect(() => {
        const findDetail = ProductList.filter(product => product.slug === slug);
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        } else {
            window.location.href = '/';
        }
    }, [slug])

    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    }

    const handlePlusQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity:quantity
        }))
    };
    


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={detail.img} alt={detail.name} width={'370px'} height={'450px'} />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50">
                            {detail.category}
                        </h4>
                        <h1 className='display-5'>{detail.name}</h1>
                        <h3 className='display-6 fw-bold my-6'>${detail.price?.toFixed(2)}</h3>
                        <div className="d-flex my-3">
                            <div className='d-flex gap-2 justify-content-center algin-items-center'>
                                <button className='bg-grey d-flex justify-content-center 
                                align-items-center h-full rounded-2 fw-bold' style={{ width: '30px', border: 'none' }}
                                    onClick={handleMinusQuantity}>-</button>
                                <span className='bg-grey d-flex justify-content-center
                                align-items-center h-full rounded-2 fw-bold'style={{ width: '30px', border: 'none' }}>{quantity}</span>
                                <button className='bg-grey d-flex justify-content-center 
                                align-items-center h-full rounded-2 fw-bold'style={{ width: '30px', border: 'none' }}
                                    onClick={handlePlusQuantity}>+</button>
                            </div>
                            <button className='btn btn-outline-dark mx-3'
                                onClick={() => handleAddToCart(detail)}>Add to Cart</button>
                        </div>
                        <p className="lead">{detail.desc}</p>

                    </div>
                </div>
            </div>
            <CartTap />
        </div>
    )
}
