import React from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../../../../../models/product.model";

interface Props {
    product: Product
}

const ProductItemComponent = ({ product }: Props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>${product.price} usd</Card.Title>
                    <Card.Text>
                        {product.title}
                    </Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductItemComponent;