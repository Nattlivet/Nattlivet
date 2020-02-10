import React from 'react';
import Link from 'next/link';

import './Header.scss';

const Header = (props: any) => {
    return (
        <header className="Header">
            <div className="Header-Content">
                <div className="Header-Logo">
                    <Link href="/">Nattlivet</Link>
                </div>
                <nav className="Header-Navigation">
                    <Link href="/">Home</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
