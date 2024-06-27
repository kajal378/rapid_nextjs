"use client"

import { Button, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import profilePic from '../../../public/images/logo.png'
import "../../../public/sass/pages/header.scss";
import Link from "next/link";
import { useState } from "react";
import { faBars, faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(false);
    return (
        <div className="header_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                        <div className="inner_parent">
                            <div className="left_area">
                                <div className="images">
                                    <Image
                                        src={profilePic}
                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                            <div className="right_area">
                                <div className="inner_right">
                                    <div className="left">
                                        <ul className="center">
                                            <li><Link href="/home">home</Link></li>
                                            <li><Link href="/aboutss">aboutus</Link></li>
                                            <li><Link href="/blogs">blog</Link></li>
                                            <li><Link href="/contacts">contactUs</Link></li>
                                        </ul>
                                    </div>
                                    <div className="right">
                                        <div className="shopping_1">
                                            <Link href="/"><FontAwesomeIcon icon={faShoppingCart} className="shopping" /></Link>
                                        </div>
                                        <div className="menu_icon" onClick={() => setMenu(true)}>
                                            <Link href="/"><FontAwesomeIcon icon={faBars} className="bar" /></Link>
                                        </div>
                                        <ul className="last_one">
                                            <li><button type="button" className="btn1" onClick={() => router.push('/auth/login')}>Login</button></li>
                                            <li><button type="submit" className="btn2" onClick={() => router.push('/auth/register')}>Resgister</button></li>

                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </Col>
                </Row>
            </Container>

            {menu ?
                <div className="open_menu">

                    <div className="parent">
                        <div className="left_part">
                            <div className="images">
                                <Image
                                    src={profilePic}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="closeicon" onClick={() => setMenu(false)}>
                            <FontAwesomeIcon icon={faTimes} className="close" />
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <ul className="nav_bars">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">About us</Link></li>
                                    <li><Link href="/">News</Link></li>
                                    <li><Link href="/">News details</Link></li>
                                    <li><Button type="submit" className="btn1" onClick={() => router.push('/auth/login')}>Login</Button></li>
                                    <li><Button type="submit" className="btn2" onClick={() => router.push('/auth/register')}>Resgister</Button></li>
                                </ul>
                            
                        </Col>
                    </Row>
                </Container>

                </div>
                : null}
        </div >
    )
}

export default Header;