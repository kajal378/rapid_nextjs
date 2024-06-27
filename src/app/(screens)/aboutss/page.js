"use client"
import React from "react";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../../../public/sass/pages/aboutss.scss";
import picture1 from '../../../../public/images/clip_1.png';
import picture2 from '../../../../public/images/clip_2.png';
import picture3 from '../../../../public/images/clip_3.png';
import picture4 from '../../../../public/images/clip_4.png';
import picture5 from '../../../../public/images/clip_5.png';
import Aboutss_1 from "@/app/components/aboutss";

const Aboutss = () => {
    return (
        <>
        <Aboutss_1 heading="About Us" />
            <div className="about_section odd_section ">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                            <Row >
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12} >
                                    <div className="left_area">
                                        <div className="left_picture">
                                            <Image
                                                src={picture1}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12} >
                                    <div className="right_area">
                                        <div className="about_content_right">
                                            <h5>Who We Are</h5>
                                            <p className="about_content_first_p">
                                                Rapid Datacom is the US Veteran’s wireless provider. Our service is based on dependable,
                                                nationwide 4G and 5G LTE networks. We are committed to providing veterans with this
                                                dependable wireless service and exceptional support, while supporting other veterans
                                                through contributions to organizations such as Platoon 22 and Heroic Reins.
                                            </p>
                                            <p className="second_pera_about">When you partner with us, you will know that you too are contributing to the recovery of our military Veterans!</p>

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="about_section even_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Row >
                                <Col xxl={7} xl={7} lg={7} md={7} sm={{ span: 7, order: 0 }} xs={{ span: 12, order: 1 }}>
                                    <div className="right_area">
                                        <div className="about_content_right">
                                            <h6>Our mission</h6>
                                            <p className="about_content_third_p">
                                                Our mission is to provide great mobile service that supports causes dedicated to the health and recovery of US Veterans.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={{ span: 5, order: 1 }} xs={{ span: 12, order: 0 }}>

                                    <div className="left_area">
                                        <div className="left_picture">
                                            <Image
                                                src={picture2}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="about_section odd_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                            <Row >
                                <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12}>
                                    <div className="left_area">
                                        <div className="left_picture">
                                            <Image
                                                src={picture3}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                                    <div className="right_area">
                                        <div className="about_content_right">
                                            <h5>Our vision</h5>
                                            <h3>Improving the lives of <span>US Veterans.</span></h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="about_section even_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Row >
                                <Col xxl={7} xl={7} lg={7} md={7} sm={{ span: 7, order: 0 }} xs={{ span: 12, order: 1 }}>
                                    <div className="right_area">
                                        <div className="about_content_right">
                                            <h6>Values</h6>
                                            <p className="about_content_third_p">
                                                We support organizations with shared values. Our focus is to ensure US Veterans
                                                recovery programs are provided the resources necessary.

                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={5} sm={{ span: 5, order: 0 }}  xs={{ span: 12, order: 0 }}>

                                    <div className="left_area">
                                        <div className="left_picture">
                                            <Image
                                                src={picture4}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div className="about_section odd_section padding_bottom">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                            <Row >
                                <Col xxl={5} xl={5} lg={5} md={6} sm={6} xs={12}>
                                    <div className="left_area">
                                        <div className="left_picture_1">
                                            <Image
                                                src={picture5}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={7} xl={7} lg={7} md={6} sm={6} xs={12}>
                                    <div className="right_area">
                                        <div className="about_content_right">
                                            <p className="upr_text">Join Our Networks</p>
                                            <h5>Are you ready to join us ?</h5>
                                            <p className="about_content_first_p fourth">Lorem ipsum sit dor el ipsum dor dolor sit ipsum lorem dor  dolor sit sat lorem ipsum dor sit.
                                            </p>
                                            <Button type="button" className="bttn">Join</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}
export default Aboutss;