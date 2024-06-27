"use client"

import { Col, Container , Row } from "react-bootstrap";
import "../../../public/sass/pages/blogs.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import image3 from '../../../public/images/card_1.png';
import image4 from '../../../public/images/card_2.png';
import image5 from '../../../public/images/card_3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Blogs = () => {
    const router = useRouter()
    var settings = {
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <FontAwesomeIcon icon={faArrowLeft} />,
        nextArrow: <FontAwesomeIcon icon={faArrowRight} />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
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
            <div className="banner_section_3">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="slider_3">
                                <div className="blog_heading">
                                    <h5>Blogs</h5>
                                    <p className="blog_pera"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
                                </div>
                                <Slider {...settings}>
                                    <div className="main_banner_3">
                                        <div className="main_banner">
                                            <div className="card_1">
                                                <div className="image_3">
                                                    <Image
                                                        src={image3}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_3">
                                                    <p className="first"> November 18, 2021</p>
                                                    <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                    <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                    <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon" /></Link>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="main_banner_3">
                                        <div className="main_banner">
                                            <div className="card_1">
                                                <div className="image_3">
                                                    <Image
                                                        src={image4}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_3">
                                                    <p className="first"> November 18, 2021</p>
                                                    <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                    <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                    <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon" /></Link>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="main_banner_3">
                                        <div className="main_banner">
                                            <div className="card_1">
                                                <div className="image_3">
                                                    <Image
                                                        src={image5}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_3">
                                                    <p className="first"> November 18, 2021</p>
                                                    <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                    <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                    <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon" /></Link>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="main_banner_3">
                                        <div className="main_banner">
                                            <div className="card_1">
                                                <div className="image_3">
                                                    <Image
                                                        src={image5}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_3">
                                                    <p className="first"> November 18, 2021</p>
                                                    <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                    <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                    <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon" /></Link>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="main_banner_3">
                                        <div className="main_banner">
                                            <div className="card_1">
                                                <div className="image_3">
                                                    <Image
                                                        src={image3}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_3">
                                                    <p className="first"> November 18, 2021</p>
                                                    <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                    <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                    <p className="fourth">Read more <Link href="/"><FontAwesomeIcon icon={faArrowRight} /></Link></p>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="main_banner_3">
                                        <div className="main_banner">
                                            <div className="card_1">
                                                <div className="image_3">
                                                    <Image
                                                        src={image4}
                                                        alt="Picture of the author"
                                                    />
                                                </div>
                                                <div className="text_area_3">
                                                    <p className="first"> November 18, 2021</p>
                                                    <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                    <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                    <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon" /></Link>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>

                                   
                                   
                                </Slider>
                                <div className="button">
                                    <button type="submit" className="btnn_3"onClick={() => router.push('/blogs')}>VIEW ALL BLOGS</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Blogs;