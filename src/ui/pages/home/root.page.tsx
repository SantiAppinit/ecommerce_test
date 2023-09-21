import React from 'react';
import { useAppStore } from '../../../logic/store';
import { CommonSchema } from '../../../logic/schemas/common.schema';


const RootPage = ({ children }: any) => {

    const isLoading = useAppStore((state: CommonSchema) => state.loading);

    if(isLoading) {
        return <div>loading...</div>
    }

    return <div>
        Root page
        {children}
    </div>
}

export default RootPage;