import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import shape2 from '../../assets/images/img/shape-2.png'
import service from '../../assets/images/banner/service.png'
import dog from '../../assets/images/icon/dog.png'
import saloon from '../../assets/images/icon/beauty-saloon.png'
import Training from '../../assets/images/icon/dog-training.png'
import Health from '../../assets/images/icon/healthcare.png'
import house from '../../assets/images/icon/pet-house.png'
import serviceview from '../../assets/images/img/service.webp'

function Service() {
    return (
        <>
            <Header />
            <div className='main-bg'>
                <img src={service} />
            </div>

            <section className="section-padding">
                <Container>
                    <div className='text-left'>
                        <h1 className="main-head">
                            All Pet Care Services
                        </h1>
                        <p>Tristique nulla aliquet enim tortor at auctor urna nunc.</p>
                    </div>
                    <div className='needplace'>
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
                    </div>
                </Container>
            </section>

            <section className="section-padding">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='service-Visit'>
                                <h1 className="main-head">
                                    Each Visit Also Includes
                                </h1>
                                <p>Justo eget magna fermentum iaculis eu non diam phasellus. Eu lobortis elementum nibh tellus molestie nunc. Ullamcorper eget nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis</p>
                                <ul>
                                    <li><i className="fa fa-check-circle" /> Clean pet cages and tanks</li>
                                    <li><i className="fa fa-check-circle" /> Scoop Litter Boxes</li>
                                    <li><i className="fa fa-check-circle" /> Bringing in mail and packages</li>
                                    <li><i className="fa fa-check-circle" /> Watering Plants</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='serviceIMG-Visit'>
                                <img src={serviceview} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>
    )
}

export default Service