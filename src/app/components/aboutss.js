"use client"
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/abouts_1.scss";

const Aboutss_1 = (props) => {
    return(
        <>
        <div className="about_section padding_top">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="about_us">
                        <h5>{props.heading}</h5>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Aboutss_1;