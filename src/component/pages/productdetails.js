import React from 'react'
import Header from '../../directives/header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import product1 from '../../assets/images/img/product1.png'
import Footer from '../../directives/footer'



const Productdetails = () => {
    return (
        <>
            <Header />
            <div className="details">
                <div className='home-section'>
                    <Container>

                        <Row>

                            <Col lg={6}>
                                <img src={product1} />
                                <Row>
                                    <Col lg={3}>
                                        <img src={product1} />
                                        <h5 className='text-center'>1kg</h5>
                                    </Col>
                                    <Col lg={3}>
                                        <img src={product1} />
                                        <h5 className='text-center'>5kg</h5>

                                    </Col>
                                    <Col lg={3}>
                                        <img src={product1} />
                                        <h5 className='text-center'>10kg</h5>

                                    </Col>
                                    <Col lg={3}><br /><br /><br />
                                        <h5 className='text-center'>₹620.00</h5>

                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <div className='product-details'>
                                    <h4>
                                        Product details
                                    </h4>
                                    <h6> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>

                                    <h4>About Us</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <h6>Brand</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Mars Petcare Inc</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Flavour</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Chicken</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Diet type</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Non Vegetarian</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Age Range</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Adult</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Traget Species</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Dog</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Item From</h6>
                                        </Col>
                                        <Col lg={6}>
                                            <h6>Pellet</h6>
                                        </Col>
                                    </Row>
                                    <div className='product-details'>

                                        <Row>
                                            <Col lg={4}>

                                            </Col>
                                            <Col lg={4}>
                                                <h5 className='text-center'>₹620.00</h5>

                                            </Col>
                                            <Col lg={4}>
                                                <Button className="yellow-btn">Add to Card </Button>

                                            </Col>

                                        </Row>
                                    </div>

                                </div>
                            </Col>
                        </Row>


                    </Container>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Productdetails