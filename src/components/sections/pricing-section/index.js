import React from "react";
import "./index.css"
import Image1 from "./imgs/1.webp"
import PlayButton from "./imgs/play-button.png"

function Pricing() {
    return(
        <div id="pricing" className="pricing">
            <div className="color">
                <h2>Choose your plan</h2>
                <div className="description">
                    <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Starters</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="price">
                        <span>Starting at</span>
                        <strong>$7</strong>
                        <span>Per Month</span>
                    </div>
                    <p style={{ marginBottom: '3rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?</p>
                    <a className="btn" href="#">Get started</a>
                </div>
                <div className="col prior">
                    <h3>Starters</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="price">
                        <span>Premium</span>
                        <strong>$75</strong>
                        <span>Per Month</span>
                    </div>
                    <p style={{ marginBottom: '3rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?</p>
                    <a className="prior-btn" href="#">Get started</a>
                </div>
                <div className="col">
                    <h3>Enterprise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="price">
                        <span>Starting at</span>
                        <strong>$390</strong>
                        <span>Per Month</span>
                    </div>
                    <p style={{ marginBottom: '3rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum enim nobis aspernatur saepe dolores?</p>
                    <a className="btn" href="#">Get started</a>
                </div>
            </div>
            <div style={{ marginTop: '15rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
                <img src={Image1} style={{ maxWidth: '100%', height: 'auto' }}></img>
                <img src={PlayButton} style={{ position: 'absolute', height: '70px' }}></img>
            </div>
        </div>
    );
}

export default Pricing;