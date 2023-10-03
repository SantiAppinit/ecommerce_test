import React, { useEffect } from "react";
import { useAppStore } from "../../../logic/store";


const BarFilterComponent = () => {

    const categories = useAppStore(state => state.categories);
    const getCategories = useAppStore(state => state.getCategories);
    const getProductsByCategory = useAppStore(state => state.getProductsByCategory);
    const getProducts = useAppStore(state => state.getProducts);

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="bar-filter">
            <div className="bar-filters-content">
                <div className="bar-filter-item">
                    <span onClick={() => getProducts}>clear</span>
                </div>
                {
                    categories.map(c => (
                        <div className="bar-filter-item" key={c}>
                            <span onClick={() => getProductsByCategory(c)}>{c}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default BarFilterComponent;