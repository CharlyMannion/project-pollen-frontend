import React from "react";
import QrReader from 'react-qr-scanner';
import { relativeValue } from "react-range";


const QrSection = () => {
    return (
        <section className="qr-section">
            <div className="qr-container">
                <QrReader facingMode="rear" style={{width: '300px', height: '300px'}}/>
            </div>
        </section>
    );
}

export default QrSection;


   