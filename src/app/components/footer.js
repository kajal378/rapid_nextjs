"use client"
import {Col, Container, Row } from "react-bootstrap";
import Image from "next/image"; 
import profilePic from '../../../public/images/logo.png'

import "../../../public/sass/pages/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";



const Footer=()=>{
    return(
        <div className="footer_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="mainfooter">
                            <div className="inner_area">
                                <Row>
                                <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={12}>
                                    <div className="main_left">
                                        <div className="images">
                                            <Image
                                            src={profilePic}
                                            alt="Picture of the author"
                                            />

                                        </div>
                                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis libero elit, at rhoncus neque dignissim ac. Morbi suscipit nisl magna. Aliquam hendrerit</p>
                                        <div className="icons">
                                            <Link href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} className="ff" /></Link>
                                            <Link href="www.twitter.com"><FontAwesomeIcon icon={faTwitter} className="tt" /></Link>
                                            <Link href="www.instagram.com"><FontAwesomeIcon icon={faInstagram} className="in"/></Link>
                                        </div>

                                    </div>
                                </Col>
                                <Col xxl={7} xl={7} lg={7} md={12} sm={12} xs={12}>
                                    <div className="main_right">
                                        <Row>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                <div className="content">
                                                <h5>Quick Links</h5>
                                                    <ul>
                                                        
                                                        <li><Link href="/home">Home</Link></li>
                                                        <li><Link href="/aboutss">About us</Link></li>
                                                        <li><Link href="/blogs">Blog</Link></li>
                                                        <li><Link href="/blog_details">Blog details</Link></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                <div className="content2">
                                                <h5>Useful links</h5>
                                                    <ul>
                                                        
                                                        <li><Link href="/terms">Terms and conditions</Link></li>
                                                        <li><Link href="/policy">Privacy policy</Link></li>
                                                        <li><Link href="/contacts">Contact us</Link></li>
                                                        <li><Link href="/accordin">FAQ'S</Link></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </Col>
                            </Row>
                            </div>
                            <div className="footer_last">
                                <p>©  2022  | All Rights Reserved  | <Link href= "/">Powered By Globiz Technology Inc.</Link></p>
                            </div>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;