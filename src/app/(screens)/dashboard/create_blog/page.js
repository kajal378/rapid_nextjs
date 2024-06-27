"use client"
import React from "react";
import "../../../../../public/sass/dashboard/create_blog.scss";
import Sidebar from "@/app/components/sidebar";
import { faEllipsisV, faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from 'react-bootstrap/Table';
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";

const Create_blog = () => {
    return (
        <>
            <section className="db_section profile_section">
                <div className="main_parent">
                    <div className="left_db">
                        <Sidebar />
                    </div>
                    <div className="right_db">
                        <div className="inner_right">
                            <div className="parent">
                                <div className="left_blog">
                                    <h5>Blogs</h5>
                                </div>
                                <div className="right_blog">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-toggle">
                                            <div className="iconss_1"><FontAwesomeIcon icon={faFilter} className="filter" /></div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu">
                                            <div className="dropdown-item">

                                            <Row>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Label for="id_1" className="form-label">Create On</Form.Label>
                                                    </Form.Group>
                                                </Col>

                                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control type="date" required className="form-control" id="id0" placeholder="Enter start date" />
                                                        {/* <div className="calndr">
                                                                            <FontAwesomeIcon icon={faCalendarAlt} className="cln_icon" />
                                                                        </div> */}
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control type="date" required className="form-control" id="id_2" placeholder="Enter last date" />
                                                        {/* <div className="calndr">
                                                                            <FontAwesomeIcon icon={faCalendarAlt} className="cln_icon" />
                                                                        </div> */}
                                                    </Form.Group>
                                                </Col>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                                                    <div className="radio_parent">
                                                        <div className="first">
                                                            <Form.Group className="form-group">
                                                                <Form.Check type="radio" className="form-cheack" label="Yes" name="radio1" id="formRadios1" />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="second">
                                                            <Form.Group className="form-group">
                                                                <Form.Check type="radio" className="form-cheack" label="No" name="radio1" id="formRadios2" />
                                                            </Form.Group>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                                                    <div className="left">
                                                        <Button type="submit" className="bttn">Reset all</Button>
                                                    </div>
                                                    <div className="right">
                                                        <Button type="submit" className="bttn">Submit</Button>
                                                    </div>
                                                </Col>

                                            </Row>

                                            </div>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="tabel_responsive">
                                <Table className="tabel" responsive>
                                    <thead>
                                        <tr>
                                            <th><FontAwesomeIcon icon={faSort} className="sort" />Title</th>
                                            <th><FontAwesomeIcon icon={faSort} className="sort" />Blog id</th>
                                            <th><FontAwesomeIcon icon={faSort} className="sort" />Date</th>
                                            <th><FontAwesomeIcon icon={faSort} className="sort" />Status</th>
                                            <th><FontAwesomeIcon icon={faSort} className="sort" />Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>paid</td>
                                            <td>
                                                <Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>paid</td>
                                            <td>
                                            <Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>paid</td>
                                            <td><Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>paid</td>
                                            <td><Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>paid</td>
                                            <td><Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>paid</td>
                                            <td><Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>Failed</td>
                                            <td><Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>
                                        <tr>
                                            <td>harok256140</td>
                                            <td>#56123</td>
                                            <td>02-12-2021</td>
                                            <td>Paid</td>
                                            <td><Dropdown className="dropdown">
                                                <Dropdown.Toggle  className="dropdown-toggle ">
                                                    <FontAwesomeIcon icon={faEllipsisV} className="ellipse"/></Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="dropdown-item">View Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Edit Blog</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item">Delete Blog</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown></td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                            


                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Create_blog;