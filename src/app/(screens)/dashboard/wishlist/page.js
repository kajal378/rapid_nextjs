"use client"

import { Col, Container, Row } from "react-bootstrap";
import "../../../../../public/sass/dashboard/wishlist.scss";
import Sidebar from "@/app/components/sidebar";
import React from "react";
import Image from "next/image";
import image3 from '../../../../../public/images/card_1.png';
import image4 from '../../../../../public/images/card_2.png';
import image5 from '../../../../../public/images/card_3.png';
import blog4 from  '../../../../../public/images/blog_4.png';
import blog5 from  '../../../../../public/images/blog_5.png';
import blog6 from  '../../../../../public/images/blog_6.png';
import blog7 from  '../../../../../public/images/blog_7.png';
import blog8 from  '../../../../../public/images/blog_8.png';
import blog9 from  '../../../../../public/images/blog_9.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Wishlist = () => {

    return (
        <>
            <section className="db_section profile_section">
                <div className="main_parent">
                    <div className="left_db">
                        <Sidebar />
                    </div>
                    <div className="right_db">
                        <div className="inner_right">
                            <div className="banner_section_3">
                                <Container>
                                    <Row>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <div className="slider_3">
                                                <div className="wishlist">
                                                    <h5>My Wishlist</h5>
                                                </div>

                                                <div className="main_banner">
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={image3}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <p className="fourth">Read more <Link href="/"><FontAwesomeIcon icon={faArrowRight} /></Link></p>
                                                        </div>

                                                    </div>
                                                    
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={image4}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={image5}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={blog4}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={blog5}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={blog6}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={blog7}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={blog8}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>
                                                    <div className="card_1">
                                                        <div className="image_3">
                                                            <Image
                                                                src={blog9}
                                                                alt="Picture of the author"
                                                            />
                                                            <div className="heart">
                                                                <Link href="#"><FontAwesomeIcon icon={faHeart} /></Link>
                                                            </div>
                                                        </div>
                                                        <div className="text_area_3">
                                                            <p className="first"> November 18, 2021</p>
                                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} className="f_icon"/></Link>
                                                        </div>

                                                    </div>

                                                </div>




                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Wishlist;