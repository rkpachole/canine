import React from 'react'
import Header from '../../../directives/header'
import Footer from '../../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import carering from '../../../assets/images/banner/carering.png'
import dog from '../../../assets/images/icon/dog.png'
import saloon from '../../../assets/images/icon/beauty-saloon.png'
import Training from '../../../assets/images/icon/dog-training.png'
import Health from '../../../assets/images/icon/healthcare.png'
import house from '../../../assets/images/icon/pet-house.png'
import { Link } from 'react-router-dom'

const Patcarering = () => {
    return (
        <>
            <Header />
            <div className='main-bg'>
                <img src={carering} />
            </div>

            <section className="section-padding">
                <Container>
                    <div className='text-left'>
                        <h1 className="main-head">
                            AllCarering Services
                        </h1>
                        <p>Tristique nulla aliquet enim tortor at auctor urna nunc.</p>
                    </div>
                    <div className='needplace'>
                            <Link to='/grooming'>
                        <Row className='justify-content-center'>
                            <Col lg={4} className="mb-3">
                                <div className='service-card'>
                                    <div className='serIcon'>
                                        <img src={dog} />
                                    </div>
                                    <h3>Walking & Sitting</h3>
                                    <p>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi</p>
                                </div>
                            </Col>
                           
                            <Col lg={4} className="mb-3">
                                <div className='service-card'>
                                    <div className='serIcon'>
                                        <img src={saloon} />
                                    </div>
                                    <h3>Pet Grooming</h3>
                                    <p>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi</p>

                                </div>
                            </Col>
                            <Col lg={4} className="mb-3">
                                <div className='service-card'>
                                    <div className='serIcon'>
                                        <img src={Training} />
                                    </div>
                                    <h3>Pet Training</h3>
                                    <p>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi</p>
                                </div>
                            </Col>
                            <Col lg={4} className="mb-3">
                                <div className='service-card'>
                                    <div className='serIcon'>
                                        <img src={Health} />
                                    </div>
                                    <h3>Health & Wellness</h3>
                                    <p>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi</p>
                                </div>
                            </Col>
                            <Col lg={4} className="mb-3">
                                <div className='service-card'>
                                    <div className='serIcon'>
                                        <img src={house} />
                                    </div>
                                    <h3>Pet Hotel</h3>
                                    <p>Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi</p>
                                </div>
                            </Col>
                        </Row>
                        </Link>
                    </div>
                </Container>
            </section>


            <Footer />
        </>
    )
}

export default Patcarering