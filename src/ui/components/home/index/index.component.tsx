import React, { useEffect } from 'react';
import CarouseComponent from './carousel.component';
import FilterByComponent from './filter-by.component';
import ProductListComponent from './products/product-list.component';
import { SortValue } from '../../../../models/enums/sort.enum';
import productsApi from '../../../../api/products.api';
import { useAppStore } from '../../../../logic/store';
import { ProductSchema } from '../../../../logic/schemas/product.schema';
import { CommonSchema } from '../../../../logic/schemas/common.schema';
import { FilterParams } from '../../../../models/filter.model';

const IndexComponent = () => {

    const setProducts = useAppStore((state: ProductSchema) => state.setProducts);
    const setLoading = useAppStore((state: CommonSchema) => state.setLoading);

    const loadProducts = async (params?: FilterParams) => {
        setLoading(true);
        const products = await productsApi.getAll(params);
        setProducts(products);
        setLoading(false);
    }

    useEffect(() => {
        // loadProducts();
    }, []);

    const handleOrderBy = async (value: SortValue) => {
        await loadProducts({
            sort: value
        })
    }
    
    const handleLimitBy = async (value: number) => {
        await loadProducts({
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