import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './Page.scss';

const Page = (props: any) => {
    return (
        <div className="Page">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export default Page;
