import React from "react";
import "./index.css";
import Image1 from './imgs/1.png';
import Image2 from './imgs/2.png';
import Image3 from './imgs/3.png';

function Process() {
    return (
        <div id="process" className="process">
            <h2 className="title">Our Approach</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
            <div className="section-row">
                <div className="card">
                    <img src={Image1}></img>
                    <h3>Data Gathering</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
                <div className="card">
                    <img src={Image2}></img>
                    <h3>Data Gathering</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
                <div className="card">
                    <img src={Image3}></img>
                    <h3>Data Gathering</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
            </div>
        </div>
    );
}

export default Process;