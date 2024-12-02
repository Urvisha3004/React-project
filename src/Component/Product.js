import React, { useEffect, useState } from 'react';
import { Container, Row, Col, button } from 'react-bootstrap';
import { FaIndianRupeeSign, FaStar } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { Link, json } from 'react-router-dom';
import { cart } from '../Counter/CounterSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

function Product() {
  const [val, setVal] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setsearch] = useState('')
  const dispatch = useDispatch()

  const addToCart = (item) => {
    dispatch(cart(item))
    toast.success('your item is add', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const Categorys = (item) => {
    fetch(`https://dummyjson.com/products/category/${item.slug}`)
      .then(res => res.json())
      .then(response => setVal(response.products));
  };

  const searchdata = (e) => {
    setsearch(e.target.value)
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then(res => res.json())
      .then(response => setVal(response.products));
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => setVal(json.products));

    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(json => setCategories(json));
  }, []);

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
      <Header />

      <Container fluid>
        <Row>
          <Col xs={12} md={3} className="categorys">
            <h3 style={{ textAlign: 'center' }}>Category</h3>
            <input type="text" placeholder='search your item.....' value={search} onChange={searchdata} className='w-100 search' />
            {
              categories.map((item) => {

                return (
                  <div className='category_item'>
                    <a href="#" className='text-decoration-none text-dark ' style={{ fontSize: '18px' }} onClick={() => Categorys(item)}>{item.name}</a>
                  </div>
                )
              })}

          </Col>
          <Col xs={12} md={9}>
            <Container>
              <Row>
                {
                  val.map((item) => {
                    return (
                      <Col key={item.id} xs={12} sm={6} lg={4} className="main_pro">
                        <div className='pro_item '>
                          <Link to={`sing/${item.id}`}>
                            <img src={item.thumbnail} />
                          </Link>
                          <div className="pro_text">
                            <p>{item.title}</p>
                            <div className='d-flex'>
                              <h4><FaIndianRupeeSign />{item.price}</h4>
                              <h5>{item.discountPercentage}% Off</h5>
                            </div>
                            <h6 className='my-1'>{item.returnPolicy}</h6>
                            <div className='d-flex justify-content-between my-3'>
                              <h5 className='ratings'>{item.rating}<FaStar className='mx-2 mb-1' /></h5>
                              <button className='add_btn' onClick={() => addToCart(item)}>
                                <TiShoppingCart className='cart' />Add
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>
          </Col>
        </Row>
      </Container >
    </>
  );
}
export default Product;
