import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdArrowDropright } from "react-icons/io";

const BuyNowForm = () => {
  return (
    <>
      <Container className='text-center mt-4'>
        <Row>
          <Col xs={12}>
            <div>
              <img src={require('../Componet/Image/Screenshot 2024-06-13 132457.png')} alt="Sign in illustration" className='img-fluid' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4} className="mx-auto mt-4 buy_now">
            <div className='buy_text'>
              <h4>Sign in</h4>
              <p className='font-weight-bold mb-0'>Email or mobile phone number</p>
              <input type="email" className='buy_input w-100' placeholder='Enter Email & Phone Number' />
              <br />
              <button className='border-0 buy_input my-3 py-1 w-100' style={{ background: '#F7CA00', borderRadius: '5px' }}>Continue</button>
              <p style={{ fontSize: '16px' }}>By continuing, you agree to Amazon's <span className='text-primary'>Conditions of Use</span> and <span className='text-primary'>Privacy Notice.</span></p>
              <div className='d-flex align-items-center justify-content-center'>
                <IoMdArrowDropright />
                <span className='text-primary ml-1' style={{ fontSize: '14px' }}>Need help?</span>
              </div>
              <hr />
              <p className='font-weight-bold mb-0'>Buying for work?</p>
              <span className='text-primary' style={{ fontSize: '14px' }}>Shop on Amazon Business</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p style={{ color: 'gray' }} className='mt-3'>New to Amazon?</p>
            <button className='account_btn w-100'>Create your Amazon account</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BuyNowForm;
