import React from "react";
import { Button, Card } from "react-bootstrap";
import { Product } from "../../../../../models/product.model";

interface Props {
    product: Product
}

const ProductItemComponent = ({ product }: Props) => {
    return (
        <div>
            <Card>
                <Card.Img src={product.image} />
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