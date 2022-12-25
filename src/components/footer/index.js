import React from "react";
import './index.css'

function Footer() {
    return (
        <div className="footer">
            <div className="main-footer-block">
                <div className="column">
                    <div className="column-title">About Us</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
                </div>
                <div className="column-mid">
                    <div className="column-title">Links</div>
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">Process</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Services</a>
                </div>
                <div className="column">
                    <div className="column-title">Subscribe</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <input type="text" placeholder="Email"></input>
                        <button type="button" className="btn-submit">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: 'gray', paddingTop: '3rem' }}>This page is made by Maksym : )</p>
            </div>
        </div>
    );
}

export default Footer;