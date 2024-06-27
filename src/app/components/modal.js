"use client"
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "../../../public/sass/pages/modals.scss";
import { useRouter } from 'next/navigation';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Modals = (props) => {
    const router = useRouter();
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={props.show} onHide={() => props.close()} className="modal" >

                <Modal.Header closeButton className='model-header'>
                </Modal.Header>
                <Modal.Body className="modal-body"><div className="modals">
                    <h2>Write a Review</h2>
                    <h6> how would you rate it?</h6>
                    <ul className="star_list">
                        <li ><FontAwesomeIcon icon={faStar} className="star active" /></li>
                        <li><FontAwesomeIcon icon={faStar} className="star " /></li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /></li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /></li>
                        <li><FontAwesomeIcon icon={faStar} className="star" /></li>
                    </ul>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Label className="form-label">Title your Review</Form.Label>
                            <Form.Control type="text" className="form-control"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label className="form-label">Write your Review</Form.Label>
                            <Form.Control as="textarea" className="form-control"></Form.Control>
                        </Form.Group>
                    </Form>
                </div></Modal.Body>
                <Modal.Footer className='model-footer'>
                    <Button className="bttn" type="button" onClick={() => router.push('/rate_review')}>
                        Submit
                    </Button>
                    <Button className="bttn" onClick={() => props.close()}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Modals;
