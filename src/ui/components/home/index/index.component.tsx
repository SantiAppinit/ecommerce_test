import React, { useEffect } from 'react';
import CarouseComponent from './carousel.component';
import FilterByComponent from './filter-by.component';
import ProductListComponent from './products/product-list.component';
import { SortValue } from '../../../../models/enums/sort.enum';
import { useAppStore } from '../../../../logic/store';
import { ProductSchema } from '../../../../logic/schemas/product.schema';

const IndexComponent = () => {

    const getProducts = useAppStore((state: ProductSchema) => state.getProducts);

    useEffect(() => {
        getProducts();
    }, []);

    const handleOrderBy = async (value: SortValue) => {
        getProducts({
            sort: value
        })
    }
    
    const handleLimitBy = async (value: number) => {
        getProducts({
            limit: value
        })
    }

    return (
        <div className='index-content'>
            <div className='index-content-carousel-container'>
                <CarouseComponent />
            </div>
            <div className='index-content-order'>
                <FilterByComponent handleOrderBy={handleOrderBy} handleLimitBy={handleLimitBy} />
            </div>
            <div className='index-content-items'>
                <ProductListComponent />
            </div>
        </div>
    )
}

export default IndexComponent;