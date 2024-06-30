import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaIndianRupeeSign, FaStar } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Header from './Header';


function Single_product() {
    const [pro, setpro] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(response => response.json())
            .then(json => setpro(json))
    })

    const [itemd, setitem] = useState(1)
    const decr = () => {
        if (itemd > 0) {
            setitem(itemd - 1);
        }
    }
    const incr = () => {
        setitem(itemd + 1);
    }
    return (
        <>
            <Header />
            <Container fluid>
                <div className="row">
                    <div className="col-lg-6 col-auto  my-3">
                        <div >
                            <div className='sing_pro d-flex justify-content-center' >
                                <img src={pro.thumbnail} alt="" />
                            </div>
                            <div>
                                <img src={pro.images} className='w-25 sing_item  ' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-auto details  my-3">
                        <div className='pro_detail'>
                            <h4>{pro.title}</h4>
                            <p>{pro.description}</p>
                            <div className='d-flex'>
                                <h4><FaIndianRupeeSign /> {pro.price}</h4>
                                <h5 >{pro.discountPercentage}% Off</h5>
                            </div>
                        </div>
                        <h5 className='detail_reti my-3' >{pro.rating}<FaStar className='mx-2 mb-1' /></h5>
                        <h6 className='my-4 mx-0'>{pro.returnPolicy}</h6>
                        <div className='my-3'>
                            <h3>Products Details :- </h3>
                            <div className='px-1 brand_detali' >
                                <p style={{ fontSize: '19px' }}>Brand  : {pro.brand}</p>
                                <p style={{ fontSize: '19px' }}>SKU  : {pro.sku}</p>
                                <p style={{ fontSize: '19px' }}>Quantity : {pro.minimumOrderQuantity}</p>
                                <p style={{ fontSize: '19px' }}>Stock : {pro.availabilityStatus}</p>
                                <p style={{ fontSize: '19px' }}>Warranty : {pro.warrantyInformation}</p>
                                <p style={{ fontSize: '19px' }}>Information : {pro.shippingInformation}</p>
                            </div>
                        </div>
                        <div>
                            <h3>Buy Items :-</h3>
                            <div className='d-flex buy_item my-4' style={{ cursor: 'pointer' }}>
                                <button onClick={decr}>-</button>
                                <h5>{itemd}</h5>
                                <button onClick={incr}>+</button>
                            </div>
                        </div>
                        <div className='my-2 d-flex '>
                            <Link to={'/Buy'}>
                                <button className='buy_btn buy' ><RiArrowRightDoubleFill className='buy_icon' />Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Single_product