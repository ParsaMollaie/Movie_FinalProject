import React, { useState } from 'react'
import { Button, Col, Form, Row } from "react-bootstrap"
import "../styles/editMovie.css"

const EditMovie = () => {

    const [name, setName] = useState();
    const [year, setYear] = useState();
    const [img, setImg] = useState();
    const [desc, setDesc] = useState();


    const editMovie = () => {


        var axios = require('axios');
        var data = JSON.stringify({
            "name": name,
            "year": year,
            "description": desc,
            "imgUrl": img
        });

        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/movies/update.php',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <div className="margin">
                <Form>
                    <Form.Group as={Row} className="mb-3 " controlId="txt_name">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={name} onChange={e => setName(e.target.value)} className="ms-4" type="text" placeholder="Movie Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="txt_year">
                        <Form.Label column sm={2}>
                            Year
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={year} onChange={e => setYear(e.target.value)} className="ms-4" type="text" placeholder="Year" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="txt_img">
                        <Form.Label column sm={2}>
                            Image
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={img} onChange={e => setImg(e.target.value)} className="ms-4" type="text" placeholder="Image Link" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="txtArea_desc">
                        <Form.Label column sm={2}>
                            Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control value={desc} onChange={e => setDesc(e.target.value)} className="ms-4" as="textarea" rows={5} type="text" placeholder="Description..." />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button variant="primary" size="lg" onClick={editMovie}>
                                Edit
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )

}
export default EditMovie
