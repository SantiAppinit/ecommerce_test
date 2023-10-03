import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { SortValue } from "../../../../models/enums/sort.enum";

interface Props {
    handleOrderBy: (value: SortValue) => void,
    handleLimitBy: (value: number) => void
}

const FilterByComponent = ({ handleOrderBy, handleLimitBy }: Props) => {

    return (
        <Container fluid>
            <Nav defaultActiveKey="/home" as="ul" className="justify-content-end">
                <NavDropdown title="Order by" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() => handleOrderBy(SortValue.asc)}>
                        Asc
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleOrderBy(SortValue.desc)}>
                        Desc
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Limit" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() => handleLimitBy(5)}>
                        5
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleLimitBy(10)}>
                        10
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
    )
}

export default FilterByComponent;