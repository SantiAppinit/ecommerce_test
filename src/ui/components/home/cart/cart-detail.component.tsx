import React from "react";
import {
  Button,
  CloseButton,
  OverlayTrigger,
  Table,
  Tooltip,
} from "react-bootstrap";

export const CartDetailComponent = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Producto 1</td>
          <td>$50.000</td>
          <td>
            <Button variant="outline-secondary" size="sm">
              <span className="py-1 material-symbols-outlined fs-6 fw-bold d-flex justify-content-center align-items-center">
                remove
              </span>
            </Button>
            <span className="mx-3">1</span>
            <Button variant="outline-secondary" size="sm">
              <span className="py-1 material-symbols-outlined fs-6 fw-bold d-flex justify-content-center align-items-center">
                add
              </span>
            </Button>
          </td>
          <td>$50.000</td>
          <td>
            <OverlayTrigger
              overlay={<Tooltip id="button-tooltip">Eliminar producto</Tooltip>}
            >
              <CloseButton onClick={() => console.log("Eliminar producto")} />
            </OverlayTrigger>
          </td>
        </tr>
        <tr>
          <td>Producto 2</td>
          <td>$150.000</td>
          <td>
            <Button variant="outline-secondary" size="sm">
              <span className="py-1 material-symbols-outlined fs-6 fw-bold d-flex justify-content-center align-items-center">
                remove
              </span>
            </Button>
            <span className="mx-3">1</span>
            <Button variant="outline-secondary" size="sm">
              <span className="py-1 material-symbols-outlined fs-6 fw-bold d-flex justify-content-center align-items-center">
                add
              </span>
            </Button>
          </td>
          <td>$150.000</td>
          <td>
            <OverlayTrigger
              overlay={<Tooltip id="button-tooltip">Eliminar producto</Tooltip>}
            >
              <CloseButton onClick={() => console.log("Eliminar producto")} />
            </OverlayTrigger>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
