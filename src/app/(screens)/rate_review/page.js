"use client"
"use client"
import React from "react";
import "../../../../public/sass/pages/review.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import image2 from '../../../../public/images/review.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Rate = () => {
    return (
        <>
           <div className="rating_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="rating_area">
                            <h3>Rating & Reviews</h3>
                            <div className="review_list_area">
                                <ul className="listing">
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                    <li>
                                        <div className="image_content_area">
                                            <div className="image_area">
                                            <Image
                                                src={image2}
                                                alt="Picture of the author"
                                            />
                                            </div>
                                            <div className="content_area">
                                                <h5>Sanjay Ahmed</h5>
                                                <ul className="star_list">
                                                    <li><FontAwesomeIcon icon={faStar} className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                    <li><FontAwesomeIcon icon={faStar}  className="star"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="date_area">Reviewed on 19 Feb, 2024</div>
                                        <div class="feedback">Excellent Service</div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ultricies egestas adipiscing sit tincidunt. Dictum sodales quis quam quis faucibus lacus. Montes mi et ante fermentum vulputate justo pellentesque quis imperdiet. Est pharetra eleifend malesuada nam donec commodo facilisi eget enim.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div> 
        </>
    )
}
export default Rate;