import React from 'react';
import RootPage from './root.page';
import IndexComponent from '../../components/home/index/index.component';


const IndexPage = () => {

    return <RootPage>
        <div className='wrap'>
            <div className='index-container'>
                <IndexComponent />
            </div>
        </div>
    </RootPage>
}

export default IndexPage;