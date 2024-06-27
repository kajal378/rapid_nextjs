"use client"
import React from "react";
import "../../../public/sass/pages/news.scss";
import { Col, Container, Row } from "react-bootstrap";

const News = () => {
    return (
        <>
           <div className="news_section bottom-space">
            <Container>
                <Row>
                    <Col>
                    <div className="last_content">
                        <p>Newsletter</p>
                        <h5>Enter your email address and get started with us</h5>
                        <div className="input_container">
                            <input type="email" className="email" placeholder="Enter email"></input>
                            <button type="submit" className="register">Ragister</button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
           </div>
        </>
    )
}
export default News;