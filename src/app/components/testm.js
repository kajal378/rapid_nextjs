"use client"

import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/testm.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import image6 from '../../../public/images/test1.png';
import image7 from '../../../public/images/test2.png';
import image8 from '../../../public/images/test3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

const Testm = () => {
    var settings = {
        className: "center",
        centerMode: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1   ,
        prevArrow: <FontAwesomeIcon icon={faArrowLeft} />,
        nextArrow: <FontAwesomeIcon icon={faArrowRight} />,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
               
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
       

    };
    return (
        <>
            <div className="banner_section_4">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="slider_4">
                                <div className="Testimonial">
                                    <h5>Testimonial</h5>
                                    <p className="test_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.</p>
                                </div>
                                <Slider {...settings}>
                                   
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image6}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image7}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image8}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image6}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image7}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image8}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image6}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_banner_4">
                                        <div className="main_banner">
                                            <div className="stars">
                                                <ul className="star_list">
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                <li><FontAwesomeIcon icon={faStar} /></li>
                                                </ul>
                                            </div>
                                            <div className="star_content">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit nisl magna. Aliquam hendrerit.</p>
                                            </div>
                                            <div className="card_4">
                                                <div className="image_4">
                                                    <Image
                                                        src={image7}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_4">
                                                    <h6> JANE COOPER</h6>
                                                    <p>lorem ipsum</p>
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
export default Testm;