import React, { useEffect } from 'react';
import { useAppStore } from '../../../logic/store';


const RootPage = ({ children }: any) => {

    const isLoading = useAppStore.getState().loading;

    useEffect(() => useAppStore.subscribe(state => {
        console.log(state.loading)
    }), [])

    if(isLoading) {
        return <div>loading...</div>
    }

    return <div>
        {children}
    </div>
}

export default RootPage;