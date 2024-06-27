"use client"

import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import image1 from '../../../public/images/rightside.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";


const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        
    };

    return (
        <>


            <div class="banner_section_1">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="slider">
                                <Slider {...settings}>
                                    <div className="main_banner_1">
                                        <div className="main_start">
                                            <div className="left_area_1">
                                                <div className="content_1">
                                                    <h1>Stay connected <span> with Rapid</span></h1>
                                                    <p className="pera_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.
                                                    </p>
                                                    <button type="submit" className="btnn-1">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                                                </div>
                                            </div>
                                            <div className="right_area_1">
                                                <div className="picture_1">
                                                    <Image
                                                        src={image1}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_1">
                                        <div className="main_start">
                                            <div className="left_area_1">
                                                <div className="content_1">
                                                    <h1>Stay connected <span> with Rapid</span></h1>
                                                    <p className="pera_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.
                                                    </p>
                                                    <button type="submit" className="btnn-1">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                                                </div>
                                            </div>
                                            <div className="right_area_1">
                                                <div className="picture_1">
                                                    <Image
                                                        src={image1}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_1">
                                        <div className="main_start">
                                            <div className="left_area_1">
                                                <div className="content_1">
                                                    <h1>Stay connected <span> with Rapid</span></h1>
                                                    <p className="pera_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.
                                                    </p>
                                                    <button type="submit" className="btnn-1">Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
                                                </div>
                                            </div>
                                            <div className="right_area_1">
                                                <div className="picture_1">
                                                    <Image
                                                        src={image1}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    

                                </Slider>
                            </div>


                        </Col>
                    </Row>
                </Container>

            </div>
           
        </>
    )
}
export default Banner;