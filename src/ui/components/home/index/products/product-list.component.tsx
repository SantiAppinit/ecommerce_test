import React from "react";
import ProductItemComponent from "./product-item.component";
import { Col, Container, Row } from "react-bootstrap";

const ProductListComponent = () => {
    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col md={4}><ProductItemComponent /></Col>
                    <Col md={4}><ProductItemComponent /></Col>
                    <Col md={4}><ProductItemComponent /></Col>
                    <Col md={4}><ProductItemComponent /></Col>
                    <Col md={4}><ProductItemComponent /></Col>
                    <Col md={4}><ProductItemComponent /></Col>
                    <Col md={4}><ProductItemComponent /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductListComponent;