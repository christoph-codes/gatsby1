import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import 'normalize.css'
import '../../styles/global.scss';

export default function Layout({ children }) {
    return (
        <div className="Layout">
            <Nav/>
            {children}
            <Footer />
        </div>
    )
}