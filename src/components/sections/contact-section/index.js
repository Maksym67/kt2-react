import React from "react";
import "./index.css";
import Image1 from "./imgs/1.webp"

function ContactSection() {
    return(
        <div id="contacts" className="contacts">
            <div className="row">
                <div className="col" style={{ width: '50%' }}>
                    <h2>Contact Us</h2>
                    <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <input style={{ width: '45%' }} type="text" placeholder="First name"></input>
                        <input style={{ width: '45%' }} type="text" placeholder="Last name"></input>
                    </div>
                    <input type="text" placeholder="Subject"></input>
                    <input type="text" placeholder="Email"></input>
                    <textarea rows="10" placeholder="Write your message here."></textarea>
                    <button type="button" className="btn-submit">Subscribe</button>
                </div>
                <div className="col" style={{ width: '40%' }}>
                    <img src={Image1}></img>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;