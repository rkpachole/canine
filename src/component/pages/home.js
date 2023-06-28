import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import HomeImg from '../../assets/images/img/home.png'
import leftImg from '../../assets/images/img/left-img.png'
import food from '../../assets/images/img/food.png'
import video from '../../assets/images/img/video.png'
import paw from '../../assets/images/img/paw.png'
import dog from '../../assets/images/img/dog.png'
import cat from '../../assets/images/img/cat.png'
import rebit from '../../assets/images/img/rebit.png'
import hamster from '../../assets/images/img/hamster.png'
import product1 from '../../assets/images/img/product1.png'
import product2 from '../../assets/images/img/product2.png'
import product3 from '../../assets/images/img/product3.png'
import Group1 from '../../assets/images/img/Group1.png'
import Group2 from '../../assets/images/img/Group2.png'
import cus1 from '../../assets/images/img/cus1.png'
import cus2 from '../../assets/images/img/cus2.png'
import cus3 from '../../assets/images/img/cus3.png'
import vector from '../../assets/images/img/Vector.png'
import brand1 from '../../assets/images/img/brand1.png'
import brand2 from '../../assets/images/img/brand2.png'
import brand3 from '../../assets/images/img/brand3.png'
import brandPro1 from '../../assets/images/img/brandPro1.png'
import brandPro2 from '../../assets/images/img/brandPro2.png'
import brandPro3 from '../../assets/images/img/brandPro3.png'



const clinetreview = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Home(props) {
  return (
    <>
      <Header />

      <div className="home-bg">
        <div className='home-section'>
          <Container>
            <Row>
              <Col lg={6} className="align-self-center">
                <div className="home-content">
                  <h1>Taking care <br />
                    for your Smart Dog !</h1>
                  <p>Human–canine bonding is the relationship between dogs and humans.</p>
                  <Button>Explore More <i className="fa fa-angle-right" /></Button>
                </div>
              </Col>
              <Col lg={6}>
                <img src={HomeImg} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={5} className="align-self-center">
              <div className="about-Img">
                <div className="video-right">
                  <img src={video} />
                </div>
                <div className="main-left">
                  <img src={leftImg} className="aboutImg-main" />
                </div>
                <div className="food-right">
                  <img src={food} />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h1 className="main-head">
                  Dogs do speak, but only to those who know how to listen.
                </h1>
                <p>Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding biscuit caramels topb</p>
                <div className="all-btn">
                  <Button className="blue-btn">Explore More <i className="fa fa-angle-right" /></Button>
                </div>
              </div>
            </Col>
            <Col lg={1}>
              <div className="paw-right">
                <img src={paw} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <h1 className="main-head">
              Shop Deals For Your Best Buddy
            </h1>
          </Row>
        </Container>
        <Container fluid>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={clinetreview}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="Shop-Deals">
              <img src={dog} />
              <h1>Dog</h1>
            </div>
            <div className="Shop-Deals">
              <img src={cat} />
              <h1>Cat</h1>
            </div>
            <div className="Shop-Deals">
              <img src={rebit} />
              <h1>rabbit</h1>
            </div>
            <div className="Shop-Deals">
              <img src={hamster} />
              <h1>hamster</h1>
            </div>


          </Carousel>
        </Container>
      </section>

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
                <h1>Up to 25 % OFF all Products</h1>
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

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} xs={6}>
              <h1 className="main-head">Our Brand</h1>
            </Col>
            <Col lg={6} xs={6}>
              <div className="foodMoreone">
                <Link to="">See all</Link>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={3} sm={6} xs={6} className="mb-5">
              <div className="Brand-card brand-1">
                <div className="brandLOGO">
                  <img src={brand1} />
                </div>
                <div className="brand-main">
                  <img src={brandPro1} />
                </div>
                <div className="brand-text"><h5>Resrvation</h5></div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6} className="mb-5">
              <div className="Brand-card brand-2">
                <div className="brandLOGO">
                  <img src={brand2} />
                </div>
                <div className="brand-main">
                  <img src={brandPro2} />
                </div>
                <div className="brand-text"><h5>Resrvation</h5></div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6} className="mb-5">
              <div className="Brand-card brand-3">
                <div className="brandLOGO">
                  <img src={brand3} />
                </div>
                <div className="brand-main">
                  <img src={brandPro1} />
                </div>
                <div className="brand-text"><h5>Resrvation</h5></div>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6} className="mb-5">
              <div className="Brand-card brand-4">
                <div className="brandLOGO">
                  <img src={brand1} />
                </div>
                <div className="brand-main">
                  <img src={brandPro2} />
                </div>
                <div className="brand-text"><h5>Resrvation</h5></div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6}>
              <h1 className="main-head">Happy Customer</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={4} sm={6} xs={6}>
              <div className="Brand-cus">
                <img src={cus1} />
                <div className="brand-bg">
                  <h5>Anna & Tobby</h5>
                  <p>Amazing Products & Delivery on time.</p>
                  <div>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link>4.2/5</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6}>
              <div className="Brand-cus">
                <img src={cus2} />
                <div className="brand-bg">
                  <h5>Christine & Tom</h5>
                  <p>Love the overall Shpping experience!</p>
                  <div>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link>4.2/5</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={6}>
              <div className="Brand-cus">
                <img src={cus3} />
                <div className="brand-bg">
                  <h5>Sindy & Kitch</h5>
                  <p>Kitch is love food from the pup-hub</p>
                  <div>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link><img src={vector} /></Link>
                    <Link>4.2/5</Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="all-btn text-center mt-5 mb-4">
            <Button className="blue-btn">Explore More <i className="fa fa-angle-right" /></Button>
          </div>
        </Container>
      </section>

      <Footer />

    </>
  )
}

export default Home