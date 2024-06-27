"use client"
import React from "react";
import "../../../../../public/sass/dashboard/change_password.scss";
import Sidebar from "@/app/components/sidebar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Change_Password = () => {
    return (
        <>
            <section className="db_section profile_section">
                <div className="main_parent">
                    <div className="left_db">
                        <Sidebar />
                    </div>
                    <div className="right_db">
                        <div className="inner_right">
                            <div className="change_password">
                                <h5>Change Password</h5>
                            </div>
                            <div className="form_style">
                                <Form>
                                    <Container>
                                        <Row>
                                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} mx-auto>
                                                <Form.Group className="form-group">
                                                    <Form.Label for="id_1" className="form-label">Old password</Form.Label>
                                                    <Form.Control type="password"  className="form-control" id="id_1" placeholder="Enter Your Password" />
                                                </Form.Group>
                                                <Form.Group class="form-group">
                                                    <Form.Label for="id_2" className="form-label">New password</Form.Label>
                                                    <Form.Control type="password"  className="form-control" placeholder="Enter New Password" />
                                                </Form.Group>
                                                <Form.Group class="form-group">
                                                    <Form.Label for="id_3" className="form-label">Confirm password</Form.Label>
                                                    <Form.Control type="password" className="form-control" placeholder="Confirm Your Password"/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
                                <div className="btnss_1">
                                    <Button type="submit" className="bttn">Change Password</Button>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Change_Password;