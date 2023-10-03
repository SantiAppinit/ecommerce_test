import React from "react";
import ProductItemComponent from "./product-item.component";
import { Col, Container, Row } from "react-bootstrap";
import { useAppStore } from "../../../../../logic/store";
import { ProductSchema } from "../../../../../logic/schemas/product.schema";
import { Product } from "../../../../../models/product.model";

const ProductListComponent = () => {

    const products = useAppStore((state: ProductSchema) => state.products);

    const renderItem = (p: Product) => {
        return <Col key={p.id} md={4}><ProductItemComponent product={p} /></Col>
    }

    return (
        <div>
            <Container fluid="md">
                <Row>
                    {products.map((p: Product) => renderItem(p))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductListComponent;