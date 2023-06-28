import React from 'react'
import Header from '../../../directives/header'
import Footer from '../../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import shape2 from '../../../assets/images/img/shape-2.png'
import veterinary from '../../../assets/images/banner/veterinary.png'
import dog from '../../../assets/images/icon/dog.png'
import saloon from '../../../assets/images/icon/beauty-saloon.png'
import Training from '../../../assets/images/icon/dog-training.png'
import Health from '../../../assets/images/icon/healthcare.png'
import house from '../../../assets/images/icon/pet-house.png'

const Veterinary = () => {
    return (
        <>
            <Header />
            <div className='main-bg'>
                <img src={veterinary} />
            </div>

            <section className="section-padding">
                <Container>
                    <div className='text-left'>
                        <h1 className="main-head">
                            All Veterinary Care Services
                        </h1>
                        <p>Tristique nulla aliquet enim tortor at auctor urna nunc.</p>
                    </div>
                    <div className='needplace'>
                        <Row className='justify-content-center'>
                            <Col lg={6}>
                                <div className='vaterinary-text'>

                                    <h2 >OPENING - HOURS</h2>
                                    <p>weekdays:9:00am -5.00pm</p>
                                    <p>weekends:9:00am -12.00pm</p>
                                </div>
                                <div className='vaterinary-text'>

                                    <h2>PICKUP AND COLLECTION TIMES</h2>
                                    <p>Weekdays: 9:30am - 11:00am and 4:00pm - 5:00pm
</p>
                                    <p>Weekdays: 9:30am - 11:00am</p>
                                </div>
                                <div className='vaterinary-text'>

                                    <h2>ADDRESS</h2>
                                    <p>borivali west (mumbai)</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='service-card'>
                                    {/* <div className='serIcon'> */}
                                    <Row>



                                        <Col lg={6}>
                                            <div className="form-group p-3">
                                                <input type="email" className="form-control" placeholder="Enter Name" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group p-3">
                                                <input type="email" className="form-control" placeholder="Enter Last" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form-group p-3">
                                                <input type="email" className="form-control" placeholder="Address" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group p-3">
                                                <input type="email" className="form-control" placeholder="Enter email" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group p-3">
                                                <input type="email" className="form-control" placeholder="Phone number" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group p-3">
                                                <input type="date" className="form-control" placeholder="Enter email" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group p-3">
                                                <input type="time" className="form-control" placeholder="Enter email" />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form-group p-3">
                                                {/* <input type="email" className="form-control"  placeholder="Enter email" /> */}
                                                <select className="form-control"  >
                                                    <option selected>choose...</option>
                                                    <option >Dog Boarding</option>
                                                    <option >Cat Boarding</option>
                                                    <option >Pet spa & Grooming</option>

                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="form-group p-3">
                                                <textarea type="message" className="form-control" placeholder="Message" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>

                                        </Col>
                                        <Col lg={4}>
                                            <button type="submit" className="btn btn-primary">Submit</button>

                                        </Col>


                                    </Row>
                                </div>
                                {/* </div> */}
                            </Col>
                            {/* <Col lg={4} className="mb-3">
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
                    </Col> */}
                        </Row>
                    </div>
                </Container>
            </section>


            <Footer />
        </>
    )
}

export default Veterinary