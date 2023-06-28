import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../../directives/header'
import Footer from '../../../directives/footer'

const Grooming= () => {
  return (
    <>
    <Header/>
    <section className="section-padding">
                <Container>
                    <div className='text-left'>
                        <h1 className="main-head">
                            All  Care Services
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
                                    <p>Canine Product</p>
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
                            </Col>
                           
                        </Row>
                    </div>
                </Container>
            </section>
            <Footer/>
    </>
  )
}

export default Grooming