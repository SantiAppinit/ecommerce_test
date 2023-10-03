import React, { useEffect } from 'react';
import { useAppStore } from '../../../logic/store';
import NavbarComponent from '../../components/shared/navbar';
import BarFilterComponent from '../../components/shared/bar-filters';


const RootPage = ({ children }: any) => {

    const isLoading = useAppStore.getState().loading;

    useEffect(() => useAppStore.subscribe(state => {
        console.log(state.loading)
    }), [])

    if(isLoading) {
        return <div>loading...</div>
    }

    return <div>
        <NavbarComponent />
        {children}
    </div>
}

export default RootPage;