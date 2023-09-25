import React from "react";
import ProductItemComponent from "./product-item.component";
import { Col, Container, Row } from "react-bootstrap";
import { useAppStore } from "../../../../../logic/store";
import { ProductSchema } from "../../../../../logic/schemas/product.schema";

const ProductListComponent = () => {

    const products = useAppStore((state: ProductSchema) => state.products);

    return (
        <div>
            <Container fluid="md">
                <Row>
                    { products.map((p) => (<Col md={4}><ProductItemComponent product={p} /></Col>) ) }
                </Row>
            </Container>
        </div>
    )
}

export default ProductListComponent;