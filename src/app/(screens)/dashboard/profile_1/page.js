"use client"
import React from "react";
import "../../../../../public/sass/dashboard/profile_1.scss";
import Image from "next/image";
import pic2 from '../../../../../public/images/icon_image.png';
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Profile_1 = () => {
    return (
        <>
            <section className="db_section profile_section">
                <div className="main_parent">
                    <div className="left_db">
                        <Sidebar />
                    </div>
                    <div className="right_db">
                        <div className="inner_right">
                            <div className="first_name">
                                <Link href="#">profile <FontAwesomeIcon icon={faUser} className="user" /></Link>
                                <Link href="#">profile view</Link>
                            </div>
                            <div className="profile_view">
                                <div className="imagess1">
                                    <div className="imagess">
                                        <Image
                                            src={pic2}
                                            alt="Picture of the author"
                                        />

                                    </div>
                                    <div className="circle"></div>
                                </div>
                                <Container>
                                    <Row>
                                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <div className="form_section">
                                                <Form>
                                                    <Row>
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label for="id_1" className="form-label">First name</Form.Label>
                                                                <Form.Control type="text" required className="form-control" id="id_1" placeholder="Eg:Jack Joseph" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label for="id_2" className="form-label">Last Name</Form.Label>
                                                                <Form.Control type="text" required className="form-control" id="id_2" placeholder="Eg:Victoria " />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label for="id_3" className="form-label">Organisation Name</Form.Label>
                                                                <Form.Control type="text" required className="form-control" id="id_3" placeholder="Eg:William Drug Store" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label for="id_4" className="form-label">Role In The Organisation</Form.Label>
                                                                <Form.Control type="text" required className="form-control" id="id_4" placeholder="Eg:William Henna " />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label for="id_5" className="form-label">Reprsentation Name</Form.Label>
                                                                <Form.Control type="text" required className="form-control" id="id_5" placeholder="Eg:12 june, 2023" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                                                            <Form.Group className="form-group">
                                                                <Form.Label for="id_6" className="form-label">Contact Number</Form.Label>
                                                                <Form.Control type="text" required className="form-control" id="id_6" placeholder="Eg:+177-884-563" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_7" className="form-label">Address</Form.Label>
                                                        <Form.Control type="text" required className="form-control" id="id_7" placeholder="Eg:UAE " />
                                                    </Form.Group>
                                                    <div className="btns10">
                                                        <Button type="submit" className="bttn">Cancel</Button>
                                                        <Button type="submit" className="bttn">Save Changes</Button>
                                                    </div>
                                                </Form>
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
export default Profile_1;