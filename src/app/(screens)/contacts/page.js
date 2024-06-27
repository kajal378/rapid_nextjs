"use client"
import React from "react";
import "../../../../public/sass/pages/contact.scss";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Aboutss_1 from "@/app/components/aboutss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
    return (
        <>
            <Aboutss_1 heading="Contact Us" />
            <div className="contact_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="main_parent_1">
                                <div className="left_area">
                                    <div className="left_inn_parent">
                                        <div className="left_inn">
                                            <div className="info">
                                                <h5>Get In Touch</h5>
                                                <p> Fill up the form and our team will get back to you within 24 hours! </p>
                                            </div>
                                            <div className="listing">
                                                <ul>
                                                    <li ><Link href="#"><FontAwesomeIcon icon={faMapMarkerAlt} className="icons" /> <div className="pera">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus orci at turpis suscipit rutrum.</div> </Link></li>
                                                    <li ><Link href="#"><FontAwesomeIcon icon={faPhoneAlt} className="icons" /> <div className="pera">+123 647 8636</div></Link></li>
                                                    <li ><Link href="#"><FontAwesomeIcon icon={faAt} className="icons" /><div className="pera">info@samplemail.com</div></Link></li>
                                                </ul>
                                            </div>
                                            <div className="social_media">
                                                <ul>
                                                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                                                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bottom_content">
                                            <p>
                                                Monday - Friday: 9am - 5pm
                                            </p>
                                            <p>
                                                Saturday - Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="right_area">
                                    <div className="inner_right">
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
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_6" className="form-label">Phone number</Form.Label>
                                                        <Form.Control type="number" required className="form-control" id="id_6" placeholder="Enter phone number" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_1" className="form-label">City</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="id_1" placeholder="Enter your City" />
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_2" className="form-label">Zip code</Form.Label>
                                                        <Form.Control type="number" className="form-control" id="id_2" placeholder="Enter Zip Code" />
                                                    </Form.Group>
                                                </Col>

                                                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_2" className="form-label">Subject</Form.Label>
                                                        <Form.Select aria-label="Default select example" className="form-select">
                                                            <option>Subject</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="form-group">
                                                <Form.Label className="form-label">Message</Form.Label>
                                                <Form.Control as="textarea" className="form-control_1" />
                                            </Form.Group>
                                            <div className="btn10">
                                                <Button type="submit" className="bttn">Submit</Button>
                                            </div>

                                        </Form>
                                    </div>


                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    )
}
export default Contacts;