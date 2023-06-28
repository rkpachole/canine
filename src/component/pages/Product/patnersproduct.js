import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Group1 from '../../../assets/images/img/Group1.png'
import Group2 from '../../../assets/images/img/Group2.png'
import Header from '../../../directives/header'
import product1 from '../../../assets/images/img/product1.png'
import product2 from '../../../assets/images/img/product2.png'
import product3 from '../../../assets/images/img/product3.png'
import { Link } from 'react-router-dom'
import Footer from '../../../directives/footer'

const Patnersproduct = () => {
  return (
    <>
    <Header/>
     <Container>
        <section className="section-padding offer-productBG">
          <Row>
            <Col lg={4} sm={4} xs={4}>
              <div className="offerProImg">
                <img src={Group2} />
              </div>
            </Col>
            <Col lg={4} sm={4} xs={4}>
              <div className="offer-productContent">
                <h1>Up to 25 % OFF all Patners Products</h1>
                <Button>Shop now</Button>
              </div>
            </Col>
            <Col lg={4} sm={4} xs={4}>
              <div className="offer-rightIMG">
                <img src={Group1} />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="section-padding food">
        <Container>
          <Row>
            <Col lg={6}>
              <h5>Dog Nutrients & Food </h5>
              <h1 className="main-head">25 % OFF all Products</h1>
            </Col>
            <Col lg={6}>
              <div className="foodMore">
                <Link to="">View More <i className="fa fa-angle-right" /></Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={6} xs={6} className="mb-4">
              <div className="food-product">
                <img src={product1} />
                <h6>Drools | 3KG</h6>
                <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                <div className="all-btn">
                  <Button className="blue-btn">Buy Now</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6} className="mb-4">
              <div className="food-product">
                <img src={product2} />
                <h6>Canine Creek 4 KG</h6>
                <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                <div className="all-btn">
                  <Button className="blue-btn">Buy Now</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6} className="mb-4">
              <div className="food-product">
                <img src={product3} />
                <h6>Biscork Biscuits</h6>
                <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                <div className="all-btn">
                  <Button className="blue-btn">Buy Now</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6} className="mb-4">
              <div className="food-product">
                <img src={product1} />
                <h6>Drools | 3KG</h6>
                <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                <div className="all-btn">
                  <Link to ='/product-details'>

                  <Button className="blue-btn">Buy Now</Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6} className="mb-4">
              <div className="food-product">
                <img src={product2} />
                <h6>Canine Creek 4 KG</h6>
                <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                <div className="all-btn">
                  <Button className="blue-btn">Buy Now</Button>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6} className="mb-3">
              <div className="food-product">
                <img src={product3} />
                <h6>Biscork Biscuits</h6>
                <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food</p>
                <div className="all-btn">
                  <Button className="blue-btn">Buy Now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </>
  )
}

export default Patnersproduct