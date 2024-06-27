"use client"

import "../../../../../public/sass/pages/register_1.scss";
import Image from "next/image";
import pic3 from '../../../../../public/images/register1.png'
import pic2 from '../../../../../public/images/register2.png';
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Dummy = () => {
    return (
        <>
            <div className="register_section_1">
                <div className="main_container">
                    <div className="img_girl">
                        <Image
                            src={pic2}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="back_img">
                        <Image
                            src={pic3}
                            alt="Picture of the author"
                        />
                    </div>
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="main_parent_1">
                                    <div className="left_area">
                                        <div className="info">
                                            <h5>Sign up</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.</p>
                                        </div>
                                    </div>
                                    <div className="right_area">
                                        <div className="inner_right">
                                        <div className="line_bar">
                                            <ul>
                                                <li className="active"></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="detail">
                                            <h5>Enter your detail</h5>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_1" className="form-label">First name</Form.Label>
                                                        <Form.Control type="text" required className="form-control" id="id_1" placeholder="Enter your first name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_2" className="form-label">Last name</Form.Label>
                                                        <Form.Control type="text" required className="form-control" id="id_2" placeholder="Enter your last name" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="form-group">
                                                <Form.Label for="id_3" className="form-label">Email</Form.Label>
                                                <Form.Control type="email" required className="form-control" id="id_3" placeholder="Enter your email address" />
                                            </Form.Group>
                                            <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_4" className="form-label">User name</Form.Label>
                                                        <Form.Control type="text" required className="form-control" id="id_4" placeholder="Enter your full name" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="form-group">
                                                <Form.Label for="id_5" className="form-label">Do you have a smart phone or device to use?</Form.Label>
                                            </Form.Group>
                                            <div className="radio_parent">
                                                <div className="first">
                                                    <Form.Group className="form-group">
                                                        <Form.Check type="radio" className="form-cheack" label="Yes" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                                    </Form.Group>
                                                </div>
                                                <div className="second">
                                                    <Form.Group className="form-group">
                                                        <Form.Check type="radio" className="form-cheack" label="No" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_6" className="form-label">Phone number</Form.Label>
                                                        <Form.Control type="number" required className="form-control" id="id_6" placeholder="Enter phone number" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="form-group">
                                                <Form.Label for="id_7" className="form-label">Do you have a smart phone or device to use?</Form.Label>
                                            </Form.Group>
                                            <div className="radio_parent">
                                                <div className="first">
                                                    <Form.Group className="form-group">
                                                        <Form.Check type="radio" className="form-cheack" label="Yes" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                                    </Form.Group>
                                                </div>
                                                <div className="second">
                                                    <Form.Group className="form-group">
                                                        <Form.Check type="radio" className="form-cheack" label="No" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <Form.Group className="form-group">
                                                <Form.Label for="id_1" className="form-label">IMEI number</Form.Label>
                                                <p>Dial *#06# on your phone to access IMEI</p>
                                                <Form.Control type="email" required className="form-control" id="id_1" placeholder="Enter your device IMEI number" />
                                            </Form.Group>
                                            <Button type="submit" className="btnn10">Continue</Button>

                                        </Form>
                                        </div>


                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Dummy;