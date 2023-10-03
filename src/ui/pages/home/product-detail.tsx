import React, { useState } from 'react';
import BarFilterComponent from '../../components/shared/bar-filters';
import RootPage from './root.page';

const ProductDetailPage = () => {

    const [product, setProduct] = useState(null);

    return (
        <RootPage>
            <div className='wrap'>
                <BarFilterComponent />
            </div>
        </RootPage>
    )
}

export default ProductDetailPage;