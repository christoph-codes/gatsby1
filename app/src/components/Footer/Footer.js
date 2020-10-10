import React from 'react';
import './Footer.scss';

export default function Footer(props) {
    return (
        <div className="Footer">
            <p>This is the footer. All Rights Reserved. © {new Date().getFullYear()}</p>
        </div>
    )
}