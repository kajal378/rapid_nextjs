"use client"
import React from "react";
import "../../../../../public/sass/dashboard/blog.scss";
import Sidebar from "@/app/components/sidebar";
import { Button, Form } from "react-bootstrap";

const blog = () => {
    return (
        <>
            <section className="db_section profile_section">
                <div className="main_parent">
                    <div className="left_db">
                        <Sidebar />
                    </div>
                    <div className="right_db">
                        <div className="inner_right">
                            <div className="first_name">
                                <ul>
                                    <li>Create blog</li>
                                </ul>
                            </div>
                            <div className="form_style">
                                <Form>
                                    <Form.Group className="form-group">
                                        <Form.Label for="id_1" className="form-label">Tittle</Form.Label>
                                        <Form.Control type="text" required className="form-control" id="id_1" />
                                    </Form.Group>
                                    <Form.Group class="form-group">
                                        <Form.Label for="id_2" className="form-label">Description</Form.Label>
                                        <Form.Control as="textarea" aria-label="With textarea" className="form_area" />
                                    </Form.Group>
                                    <Form.Group class="form-group">
                                        <Form.Label for="id_3" className="form-label">Upload File</Form.Label>
                                        <Form.Control type="file" multiple className="form-control_1" />
                                    </Form.Group>
                                </Form>
                                <div className="btnss_1">
                                    <Button type="submit" className="bttn">Cancel</Button>
                                    <Button type="submit" className="bttn">Submit</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default blog;