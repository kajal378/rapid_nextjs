"use client"

import Link from "next/link";
import { Col, Container,  Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../../../../../public/sass/pages/login.scss";
import Button from 'react-bootstrap/Button';
import React from "react";
import { useRouter } from 'next/navigation';



const Login = () => {
    const router = useRouter();
    return (
        <>
            <div className="login_page">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="login_section_area">
                                <div className="login">
                                    <h3>Login</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                                <div className="login_form">
                                    <h2>Welcome back!</h2>
                                    <Form>
                                        <Form.Group className="form-group">
                                            <Form.Label for="id_1" className="form-label">Username</Form.Label>
                                            <Form.Control type="email" required className="form-control" id="id_1" placeholder="Enter usre name or email" />
                                        </Form.Group>
                                        <Form.Group class="form-group">
                                            <Form.Label for="id_2" className="form-label">Password</Form.Label>
                                            <Form.Control type="password" required className="form-control" id="id_2" placeholder="Enter password" />
                                        </Form.Group>
                                        <div className="forgot_password">
                                            <Link href="/auth/password" >Forgot password?</Link>
                                        </div>
                                        <div className="button_submit">
                                            <Button type="submit" className="btnn3" onClick={() => router.push('/dashboard/profile')}>Login</Button>
                                            <p className="sign_up">Dont have an account? <Link href="/auth/register">Sign up</Link></p>
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
export default Login;