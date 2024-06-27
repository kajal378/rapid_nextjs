"use client"
import React from "react";
import "../../../../public/sass/pages/blogss_1.scss";
import { Col, Container, Row } from "react-bootstrap";
import Aboutss_1 from "@/app/components/aboutss";
import Image from "next/image";
import image3 from '../../../../public/images/card_1.png';
import image4 from '../../../../public/images/card_2.png';
import image5 from '../../../../public/images/card_3.png';
import image6 from '../../../../public/images/blog_4.png';
import image7 from '../../../../public/images/blog_5.png';
import image8 from '../../../../public/images/blog_6.png';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight, faHeart } from "@fortawesome/free-solid-svg-icons";

const Blogss_2 = () => {
    const list=[
        {date:" November 18, 2021",image: image3},
        {date:" November 18, 2021",image: image4},
        {date:" November 18, 2021", image: image5},
        {date:" November 18, 2021", image: image6},
        {date:" November 18, 2021"  , image: image7},
        {date:" November 18, 2021", image: image8},
        {date:" November 18, 2021",image: image3},
        {date:" November 18, 2021",image: image4},
        {date:" November 18, 2021", image: image5},
       
    ];
    return (
        <>
            <Aboutss_1 heading="Blogs" />
            <div className="blogs_section">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="main_parent_1">
                                <div className="listed_buttons">
                                    <div className="icon_left">
                                        <Link href="#"> <FontAwesomeIcon icon={faChevronLeft} className="arrow" /></Link>
                                    </div>
                                    <ul>
                                        <li ><Link href="#"><div className="bttn active">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>
                                        <li><Link href="#"><div className="bttn">lorem</div></Link></li>


                                    </ul>
                                    <div className="icon_right">
                                        <Link href=""><FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link>
                                    </div>
                                </div>
                                <div className="blogs_parent">
                                    {list.map((item,index)=>(<div className="card_1">
                                        <div className="image_3">{
                                            <Image
                                                src={item.image}
                                                alt="Picture of the author"
                                            />
                                            }
                                            
                                        </div>
                                        <div className="text_area_3">
                                            <p className="first">{item.date}</p>
                                            <p className="second"> Lorem ipsum dolor sit amet,</p>
                                            <p className="third">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam </p>
                                            <Link href="/" className="fourth">Read more <FontAwesomeIcon icon={faArrowRight} /></Link>
                                        </div>

                                    </div>))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>



        </>
    )
}
export default Blogss_2;