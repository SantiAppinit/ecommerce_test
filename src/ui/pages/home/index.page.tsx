import React from 'react';
import RootPage from './root.page';
import IndexComponent from '../../components/home/index/index.component';
import BarFilterComponent from '../../components/shared/bar-filters';


const IndexPage = () => {

    return <RootPage>
        <div className='wrap'>
            <BarFilterComponent />
            <IndexComponent />
        </div>
    </RootPage>
}

export default IndexPage;