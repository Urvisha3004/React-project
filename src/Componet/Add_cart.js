import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router';
import { FaIndianRupeeSign, FaStar } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import Header from './Header';
import { Link } from 'react-router-dom';

function Add_cart() {
  const carts_id = useSelector((state) => state.counter.carts);

  return (
    <>
      <Header />
      <Container fluid>
        <Row className='my-4'>
          {
            carts_id.map((items) => {
              return (
                <>

                  <Col lg={5} className='my-3' >
                    <div className='cart_item d-flex justify-content-center'>
                      <img src={items.thumbnail} alt=" " />
                    </div>
                  </Col>
                  <Col lg={7} className='my-3'>
                    <div>
                      <div className='pro_detail '>
                        <h3>{items.title}</h3>
                        <p>{items.description}</p>
                        <div className='d-flex'>
                          <h4><FaIndianRupeeSign /> {items.price}</h4>
                          <h5 >{items.discountPercentage}% Off</h5>
                        </div>
                        <div className='cart_ditalis'>
                          <h5 className='detail_reti my-3' >{items.rating}<FaStar className='mx-2 mb-1' /></h5>
                          <h6 className='my-4 mx-0'>{items.returnPolicy}</h6>
                        </div>
                        <Link to={'/Buy'}>
                          <button className='buy_btn cart_buy'  ><RiArrowRightDoubleFill className='buy_icon' />Buy Now</button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Add_cart