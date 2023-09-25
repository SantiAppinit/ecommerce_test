import React from 'react';
import { useAppStore } from '../../../logic/store';
import { CommonSchema } from '../../../logic/schemas/common.schema';
import NavbarComponent from '../../components/shared/navbar';
import BarFilterComponent from '../../components/shared/bar-filters';


const RootPage = ({ children }: any) => {

    const isLoading = useAppStore((state: CommonSchema) => state.loading);

    if(isLoading) {
        return <div>loading...</div>
    }

    return <div>
        <NavbarComponent />
        <BarFilterComponent />
        {children}
    </div>
}

export default RootPage;