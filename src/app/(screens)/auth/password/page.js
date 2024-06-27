"use client"

import { Col, Container,  Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../../../../../public/sass/pages/password.scss";
import Button from 'react-bootstrap/Button';
import React from "react";
import { useRouter } from 'next/navigation'


const Password = () => {
    const router = useRouter()
    return (
        <>
            <div className="login_page">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="login_section_area">
                                <div className="login">
                                    <h3>Forgot <span>password</span></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <div className="login_form">
                                    
                                    <Form>
                                        <Form.Group className="form-group">
                                            <Form.Label for="id2" className="form-label">Email</Form.Label>
                                            <Form.Control type="email" required className="form-control" id="id2" placeholder="Enter user name or email" />
                                        </Form.Group>
                                       
                                        <div className="button_submit">
                                            <Button type="submit" className="bttn" onClick={() => router.push('/auth/otp')}>Send OTP</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Password;