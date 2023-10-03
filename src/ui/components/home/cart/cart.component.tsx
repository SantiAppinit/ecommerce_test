import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Stack,
} from "react-bootstrap";

import { CartDetailComponent } from "./cart-detail.component";

const CartComponent = () => {
  return (
    <Container className="py-3">
      <h1 className="h4 mt-3">Carro de compras</h1>
      <Row className="mt-3">
        <Col md="8">
          <CartDetailComponent />
        </Col>
        <Col>
          <h2 className="h5">Resumen del pedido</h2>
          <p className="m-1">
            Si tienes un código de descuento, ingrésalo aquí:
          </p>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Código" />
            <Button variant="secondary">Redimir</Button>
          </InputGroup>
          <Stack direction="horizontal" gap={3}>
            <p>Subtotal</p>
            <p className="ms-auto">$120.000</p>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <p>Descuento</p>
            <p className="ms-auto">-$10.000</p>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <p className="fw-bold">Total</p>
            <p className="ms-auto fw-bold">$110.000</p>
          </Stack>
          <Button className="w-100" variant="primary">
            Finalizar la compra
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartComponent;
