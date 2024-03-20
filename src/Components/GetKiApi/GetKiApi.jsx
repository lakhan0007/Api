import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GetkiApi() {
  useEffect(() => {
    ApiCalling();
  }, []);

  const [data, setData] = useState([]);

  function ApiCalling() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }

  return (
    <div className="container">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          <InputGroup className="p-3 my-3" >
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <Button variant="danger" className="ml-2">Go Location</Button>
          </InputGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {data.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
            <CardData
              image={item.flags.png}
              title={item.name.common}
              text={item.flags.alt}
              link={item.maps.googleMaps}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function CardData(props) {
  return (
    <Card style={{ width: "90%" }} className="m-3">
      <Card.Img variant="top" src={props.image} style={{ height: '150px' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text ? props.text : "Content will be available soon."}
        </Card.Text>
        <Button variant="danger" href={props.link} target="_blank">
          Go Location
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GetkiApi;