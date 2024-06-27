"use client"
import React, { useState } from "react";
import "../../../../public/sass/pages/b_details.scss";
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

import Image from "next/image";
import imagess1 from "../../../../public/images/blog_detail.png";
import image6 from "../../../../public/images/blog_7.png";
import image7 from "../../../../public/images/blog_8.png";
import image8 from "../../../../public/images/blog_9.png";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLongArrowAltLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modals from "@/app/components/modal";

const Last_b = () => {
const[show,setShow]=useState(false);

    const list = [
        { image: image6 },
        { image: image7 },
        { image: image8 },

    ];
    
    return (
        <>

            <div className="blog_details">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="blog_d_parent">
                                <Row>
                                    <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                                        <div className="blog_link">
                                            <div className="arrow">
                                                <Link href="#"><FontAwesomeIcon icon={faLongArrowAltLeft} className="left" />   Blogs</Link>
                                            </div>
                                            <h5>Lorem ipsum dolor sit amet, con sectetur elit adipiscing elit. Nullam maximus</h5>
                                            <div className="date">Sat, November 05</div>
                                            <div className="image_blog">
                                                <Image src={imagess1} alt="Picture of the author" />
                                            </div>
                                            <div className="content_box">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                                                </p>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                </p>
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                </p>
                                                <p>
                                                    Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                </p>
                                            </div>
                                            <div className="share">
                                                <ul>
                                                    <li>
                                                        Share:
                                                    </li>
                                                    <li><Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                                    <li><Link href="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                                    <li><Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                        <div className="posts">
                                            <h5>New Posts</h5>
                                            <ul className="listed">
                                                <li><p><Link href="#">
                                                    Lorem ipsum dolor  sit amet, con sectetur elit adipiscing elit con sectetur elit.
                                                </Link></p></li>
                                                <li><p><Link href="#">
                                                    Lorem ipsum dolor  sit amet, con sectetur elit adipiscing elit con sectetur elit.
                                                </Link></p></li>
                                                <li><p><Link href="#">
                                                    Lorem ipsum dolor  sit amet, con sectetur elit adipiscing elit con sectetur elit.
                                                </Link></p></li>
                                                <li><p><Link href="#">
                                                    Lorem ipsum dolor  sit amet, con sectetur elit adipiscing elit con sectetur elit.
                                                </Link></p></li>
                                                <li><p><Link href="#">
                                                    Lorem ipsum dolor  sit amet, con sectetur elit adipiscing elit con sectetur elit.
                                                </Link></p></li>
                                                <li><p><Link href="#">
                                                    Lorem ipsum dolor  sit amet, con sectetur elit adipiscing elit con sectetur elit.
                                                </Link></p></li>
                                            </ul>
                                            <div className="bttn10">
                                                <Button type="submit" onClick={() =>setShow(true) }  className="bttn">Rate & Review</Button>
                                                
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="card_items">
                                    <h5>Related posts </h5>
                                    <div className="blogs_parent">
                                        {list.map((item, index) => (<div className="card_1">
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modals show={show} close={()=>setShow(false)} />
        </>
    )
}
export default Last_b;