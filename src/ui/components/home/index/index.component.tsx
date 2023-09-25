import React from 'react';
import CarouseComponent from './carousel.component';
import OrderByComponent from './order-by.component';
import ProductListComponent from './products/product-list.component';
import { Pagination } from 'react-bootstrap';

const IndexComponent = () => {

    return (
        <div className='index-content'>
            <div className='index-content-carousel-container'>
                <CarouseComponent />
            </div>
            <div className='index-content-order'>
                <OrderByComponent />
            </div>
            <div className='index-content-items'>
                <ProductListComponent />
            </div>
        </div>
    )
}

export default IndexComponent;