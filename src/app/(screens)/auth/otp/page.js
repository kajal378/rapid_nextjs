"use client"
import { Button, Col, Container,  Row } from "react-bootstrap";
import "../../../../../public/sass/pages/otp.scss";
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Link from "next/link";
const Otp = () => {
    const [otp, setOtp] = useState('');
    return (
        <>
            <div className="otp_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="otp_parent">
                                <div className="content">
                                    <h5>
                                        OTP Varification
                                    </h5>
                                    <p>Please enter the OTP sent to your registered Email Address</p>
                                </div>
                                <div className="form-area">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        inputStyle={"inputstyle"}
                                        containerStyle={"containerstyle"}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                    <div className="resend">
                                        <Link href="#">Resend OTP</Link>
                                    </div>
                                    <div className="buttons">
                                        <Button type="submit" className="bttn">Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Otp;