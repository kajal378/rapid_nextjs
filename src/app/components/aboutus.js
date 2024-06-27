"use client"

import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/aboutus.scss";
import Image from "next/image";
import image2 from '../../../public/images/second.png';
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'


const Aboutus = () => {
    const router = useRouter()
    return(
        <>
         <div className="banner_section_2">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                            <div className="main_aboutus">
                                <div className="left_aboutus">
                                    <div className="picture_2">
                                        <Image
                                            src={image2}
                                            alt="Picture of the author"
                                        />
                                        <div className="circle">
                                            <Link href="/"><FontAwesomeIcon icon={faPlay} className="play_icon" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_aboutus">
                                    <div className="after_content">
                                        <h5>About Us</h5>
                                        <p className="aftr_pera">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        <button type="submit" className="btnn-2" onClick={() => router.push('/aboutss')}>Read more</button>
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
export default Aboutus;