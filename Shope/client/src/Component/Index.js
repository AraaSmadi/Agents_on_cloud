import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Index() {
    let navigate = useNavigate();
    const [products, setproducts] = useState([]);
    const user_id = sessionStorage.getItem('u_id');
    const firebasestate = sessionStorage.getItem('user_id');


    useEffect(() => {
        axios.get("http://localhost:3001/show")
            .then((response) => {
                setproducts(response.data);
                console.log(response.data);
            });


    }, []);



    const onDelete = (id) => {
        window.location.reload(true);
        axios.delete(`http://localhost:3001/delete/${id}`)

    }
    return (
        <div>
            <div class="page-wrapper">
                <div class="">
                    <section class="wpo-hero-slider">
                        <div class="container-fluid">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="slide-inner slide-bg-image" style={{ backgroundImage: `url("../p22.jpg")` }}>
                                        {/* <!-- <div class="gradient-overlay"></div> --> */}
                                        <div class="container-fluid">
                                            <div class="slide-content">
                                                <div data-swiper-parallax="300" class="slide-title">
                                                    <h2>Little things</h2>
                                                </div>
                                                <div data-swiper-parallax="400" class="slide-text">
                                                    <p>Made for those inevitable 'whoops!' and ‘almost…’ moments, save the day one cute look at a time with our super-soft multipacks.</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div data-swiper-parallax="500" class="slide-btns">
                                                    <a href="/about" class="theme-btn">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slide-inner slide-bg-image" data-background="slider/slide-2.jpg">
                                        {/* <!-- <div class="gradient-overlay"></div> --> */}
                                        <div class="container-fluid">
                                            <div class="slide-content">
                                                <div data-swiper-parallax="300" class="slide-title">
                                                    <h2>Our DREAMY Love</h2>
                                                </div>
                                                <div data-swiper-parallax="400" class="slide-text">
                                                    <p>Welcome and open yourself to your truest love this year with us! With the
                                                        Release Process</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div data-swiper-parallax="500" class="slide-btns">
                                                    <a href="about.html" class="theme-btn">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="slide-inner slide-bg-image" data-background="slider/slide-3.jpg">
                                        {/* <!-- <div class="gradient-overlay"></div> --> */}
                                        <div class="container-fluid">
                                            <div class="slide-content">
                                                <div data-swiper-parallax="300" class="slide-title">
                                                    <h2>Our DREAMY Love</h2>
                                                </div>
                                                <div data-swiper-parallax="400" class="slide-text">
                                                    <p>Welcome and open yourself to your truest love this year with us! With the
                                                        Release Process</p>
                                                </div>
                                                <div class="clearfix"></div>
                                                <div data-swiper-parallax="500" class="slide-btns">
                                                    <a href="about.html" class="theme-btn">Discover More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div> */}
                        </div>
                    </section>

                    <section class="wpo-partners-section">
                        <h2 class="hidden">Partners</h2>
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <div class="partner-grids partners-slider owl-carousel">
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                        <div class="grid">
                                            <img src="%PUBLIC_URL%/slider/slide-1.jpg" alt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="wpo-service-section">
                        <h2 class="hidden">some</h2>
                        <div class="container">
                            <div class="wpo-service-active owl-carousel">
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-1.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-gallery"></i>
                                            </div>
                                            <a href="service-single.html">Photography</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-2.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-serving-dish"></i>
                                            </div>
                                            <a href="service-single.html">Fine Dining</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-3.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-edit"></i>
                                            </div>
                                            <a href="service-single.html">Wedding Registry</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-4.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-wedding"></i>
                                            </div>
                                            <a href="service-single.html">Guest List</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-5.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-cake"></i>
                                            </div>
                                            <a href="service-single.html">Perfect Cake</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="wpo-service-item">
                                    <div class="wpo-service-img">
                                        <img src="assets/images/service/img-6.jpg" alt="" />

                                        <div class="wpo-service-text">
                                            <div class="s-icon">
                                                <i class="fi flaticon-wedding-rings"></i>
                                            </div>
                                            <a href="service-single.html">Wedding Ceremony</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="wpo-product-section section-padding" style={{ marginTop: " -200px" }}>
                        <div class="container">
                            <div class="row">
                                <div class="wpo-section-title">
                                    <img src="../logo.png" alt="" />

                                    <div class="section-title-img" >

                                    </div>  <h2> Products </h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="wpo-service-section-s3 section-padding">
                        <div class="container">
                            <div class="wpo-service-wrap">
                                <div class="row">
                                    {products.map((product) => {
                                        return (
                                            <div class="col-lg-4 col-md-6 col-12">
                                                <div class="wpo-service-item">
                                                    <div class="wpo-service-text">
                                                        <div class="s-icon">
                                                            <img src="../aa.webp" alt class="img img-responsive" style={{ height: "200px" }} />

                                                        </div>
                                                        <div>
                                                            <h2>{product.pname}</h2>

                                                            <h5 style={{ color: "#848892" }}>Price: {product.price}JD</h5>
                                                            <p>{product.description}</p>
                                                        </div>
                                                        <div class="submit-area" >
                                                            <br />
                                                            <br />
                                                            <button type="submit" name='like' class="btn" style={{ textDecoration: " none", color: "white", backgroundColor: "#f4b7b6e6", marginLeft: "10px" }} >  <NavLink to={`/single/${product.id}`} style={{ textDecoration: " none", color: "white", backgroundColor: "#f4b7b6e6", fontSize: "14px", height: "12px" }}>Show</NavLink> </button>
                                                            {product.user_id == user_id ? (


                                                                <>  <button type="submit" name='like' class="btn" style={{ textDecoration: " none", color: "white", backgroundColor: "#f4b7b6e6", fontWeight: "bold" }} onClick={() => onDelete(product.id)}> Delete </button>

                                                                    <button type="submit" name='like' class="btn" style={{ textDecoration: " none", color: "white", backgroundColor: "#f4b7b6e6", marginLeft: "10px" }} >  <NavLink to={`/edit/${product.id}`} style={{ textDecoration: " none", color: "white", backgroundColor: "#f4b7b6e6", fontSize: "14px", height: "12px" }}>Update</NavLink> </button>

                                                                </>

                                                            ) : (
                                                                <>

                                                                </>

                                                            )}


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        )
                                    }
                                    )}    </div>
                            </div>


                        </div>
                    </section >




                </div >



            </div >

        </div >



    );
}
