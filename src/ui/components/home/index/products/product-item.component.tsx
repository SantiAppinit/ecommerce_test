import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductItemComponent = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e807aad-42e9-46e5-8f08-34e141e718e5/calzado-court-legacy-75ljqX.png" />
                <Card.Body>
                    <Card.Title>$150 usd</Card.Title>
                    <Card.Text>
                        Nike Court
                    </Card.Text>
                    <Button variant="primary">Agregar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductItemComponent;